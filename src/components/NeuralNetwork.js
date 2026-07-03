import React, { useRef, useEffect } from 'react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rand = (min, max) => Math.random() * (max - min) + min;

    const nets = [];
    const netCount = Math.max(3, Math.floor((canvas.width * canvas.height) / 250000));

    for (let n = 0; n < netCount; n++) {
      const layerCount = 3 + Math.floor(Math.random() * 3);
      const layers = [];
      const cx = rand(0.08, 0.92);
      const cy = rand(0.1, 0.9);
      const scale = rand(0.08, 0.18);
      const spacing = scale / (layerCount - 1);

      for (let l = 0; l < layerCount; l++) {
        const nodeCount = 2 + Math.floor(Math.random() * 5);
        const x = cx - scale / 2 + l * spacing;
        const nodes = [];
        const nodeSpacing = scale / (nodeCount - 1 || 1);
        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: x * canvas.width + rand(-3, 3),
            y: (cy - scale / 2 * 0.8 + i * nodeSpacing * 0.8) * canvas.height + rand(-3, 3),
          });
        }
        layers.push(nodes);
      }

      const weights = [];
      for (let l = 0; l < layers.length - 1; l++) {
        for (let s = 0; s < layers[l].length; s++) {
          for (let t = 0; t < layers[l + 1].length; t++) {
            if (Math.random() < 0.7) {
              weights.push({
                layer: l, from: s, to: t,
                val: rand(-1.5, 1.5),
                phase: rand(0, Math.PI * 2),
              });
            }
          }
        }
      }

      const inputLabels = [];
      for (let i = 0; i < layers[0].length; i++) {
        const sub = ['₁', '₂', '₃', '₄', '₅', '₆'][i] || `_{${i + 1}}`;
        inputLabels.push(`x${sub}`);
      }
      const outputLabels = [];
      for (let i = 0; i < layers[layers.length - 1].length; i++) {
        const sub = ['₁', '₂', '₃', '₄'][i] || `_{${i + 1}}`;
        outputLabels.push(`ŷ${sub}`);
      }

      const hiddenLabels = [];
      for (let l = 1; l < layers.length - 1; l++) {
        const layerLabels = [];
        for (let i = 0; i < layers[l].length; i++) {
          const sub = ['₁', '₂', '₃', '₄', '₅', '₆'][i] || `_{${i + 1}}`;
          layerLabels.push(`h${['₁', '₂', '₃', '₄'][l - 1] || `_{${l}}`}${sub}`);
        }
        hiddenLabels.push(layerLabels);
      }

      nets.push({
        layers,
        weights,
        inputLabels,
        outputLabels,
        hiddenLabels,
        phase: rand(0, Math.PI * 2),
        pulseSpeed: rand(0.3, 0.8),
      });
    }

    const particles = [];
    for (const net of nets) {
      for (let l = 0; l < net.layers.length - 1; l++) {
        for (let s = 0; s < net.layers[l].length; s++) {
          for (let t = 0; t < net.layers[l + 1].length; t++) {
            if (Math.random() < 0.2) {
              particles.push({
                netIdx: nets.indexOf(net),
                layer: l, from: s, to: t,
                progress: Math.random(),
                speed: rand(0.002, 0.008),
              });
            }
          }
        }
      }
    }

    const floatingTexts = [
      'σ(x) = 1/(1+e⁻ˣ)', 'ReLU(x)=max(0,x)',
      'softmax', 'tanh', '∂L/∂w', '∇W', 'Adam',
      'b₁', 'b₂', 'w = 0.847', 'w = −0.231',
      'w = 1.402', 'w = −3.117', 'w = 0.053',
    ];
    const floaters = [];
    for (let i = 0; i < 12; i++) {
      floaters.push({
        text: floatingTexts[i % floatingTexts.length],
        x: rand(0, 1), y: rand(0, 1),
        vx: rand(-0.0003, 0.0003),
        vy: rand(-0.0002, 0.0002),
        opacity: rand(0.06, 0.18),
        phase: rand(0, Math.PI * 2),
        size: rand(9, 14),
      });
    }

    const draw = () => {
      const time = Date.now() / 1000;

      ctx.fillStyle = '#06060b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const net of nets) {
        for (const w of net.weights) {
          const from = net.layers[w.layer][w.from];
          const to = net.layers[w.layer + 1][w.to];
          const pulse = Math.sin(time * net.pulseSpeed + w.phase) * 0.3 + 0.5;
          const alpha = 0.03 + Math.abs(w.val) * 0.04 + pulse * 0.06;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(${w.val > 0 ? '0,212,255' : '124,58,237'}, ${alpha})`;
          ctx.lineWidth = 0.3 + Math.abs(w.val) * 0.3 + pulse * 0.3;
          ctx.stroke();

          if (Math.random() < 0.003) {
            const mx = (from.x + to.x) / 2 + rand(-8, 8);
            const my = (from.y + to.y) / 2 + rand(-6, 6);
            ctx.font = '7px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillStyle = `rgba(124, 58, 237, ${rand(0.02, 0.08)})`;
            ctx.fillText(`w=${w.val.toFixed(3)}`, mx, my);
          }
        }
      }

      for (const p of particles) {
        const net = nets[p.netIdx];
        if (!net) continue;
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        const from = net.layers[p.layer][p.from];
        const to = net.layers[p.layer + 1][p.to];
        if (!from || !to) continue;
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;
        const glow = Math.sin(p.progress * Math.PI) * 0.7 + 0.3;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, `rgba(0, 255, 255, ${glow * 0.9})`);
        grad.addColorStop(0.5, `rgba(124, 58, 237, ${glow * 0.4})`);
        grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${glow})`;
        ctx.fill();
      }

      for (const net of nets) {
        for (let l = 0; l < net.layers.length; l++) {
          const nodes = net.layers[l];
          for (let i = 0; i < nodes.length; i++) {
            const { x, y } = nodes[i];
            const pulse = Math.sin(time * net.pulseSpeed + l * 1.5 + i * 0.9) * 0.3 + 0.7;
            const radius = 4 + pulse * 3;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, radius * 2.5);
            grad.addColorStop(0, `rgba(0, 212, 255, ${pulse * 0.8})`);
            grad.addColorStop(0.4, `rgba(124, 58, 237, ${pulse * 0.4})`);
            grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
            ctx.beginPath();
            ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${pulse * 0.9})`;
            ctx.fill();
          }
        }
      }

      for (const net of nets) {
        for (let i = 0; i < net.layers[0].length; i++) {
          const { x, y } = net.layers[0][i];
          ctx.font = '7px "JetBrains Mono", monospace';
          ctx.textAlign = 'right';
          ctx.fillStyle = `rgba(0, 212, 255, ${Math.sin(time * net.pulseSpeed + i) * 0.06 + 0.15})`;
          ctx.fillText(net.inputLabels[i], x - 10, y + 2.5);
        }
        const last = net.layers[net.layers.length - 1];
        for (let i = 0; i < last.length; i++) {
          const { x, y } = last[i];
          ctx.font = '7px "JetBrains Mono", monospace';
          ctx.textAlign = 'left';
          ctx.fillStyle = `rgba(0, 212, 255, ${Math.sin(time * net.pulseSpeed + i + 2) * 0.06 + 0.15})`;
          ctx.fillText(net.outputLabels[i], x + 10, y + 2.5);
        }
        for (let l = 0; l < net.hiddenLabels.length; l++) {
          const layerIdx = l + 1;
          const labels = net.hiddenLabels[l];
          const nodes = net.layers[layerIdx];
          for (let i = 0; i < nodes.length; i++) {
            const { x, y } = nodes[i];
            ctx.font = '6px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillStyle = `rgba(124, 58, 237, ${Math.sin(time * net.pulseSpeed + layerIdx + i) * 0.04 + 0.1})`;
            ctx.fillText(labels[i], x + 8, y - 6);
          }
        }
      }

      for (const f of floaters) {
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < 0 || f.x > 1) f.vx *= -1;
        if (f.y < 0 || f.y > 1) f.vy *= -1;
        const opacity = f.opacity + Math.sin(time * 0.2 + f.phase) * 0.04;
        ctx.font = `${f.size}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'left';
        ctx.fillStyle = `rgba(124, 58, 237, ${Math.max(0, opacity)})`;
        ctx.fillText(f.text, f.x * canvas.width, f.y * canvas.height);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default NeuralNetwork;
