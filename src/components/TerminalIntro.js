import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TerminalIntro.css';

const bootLines = [
  '> Initializing neural network layers...[OK]',
  '> Loading pretrained model weights...[OK]',
  '> Spiking neurons — forward pass...[OK]',
  '> Backpropagating through time...[OK]',
  '> Embedding space initialized...[OK]',
  '> Attention mechanism engaged...[OK]',
  '> Inference engine ready...[OK]',
];

const TerminalIntro = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const intervalRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 1000);
    let lineIndex = 0;

    const lineInterval = setInterval(() => {
      if (lineIndex < bootLines.length && mountedRef.current) {
        setVisibleLines((prev) => [...prev, bootLines[lineIndex]]);
        lineIndex++;
      }
    }, 500);

    intervalRef.current = setInterval(() => {
      if (mountedRef.current) {
        setProgress((prev) => {
          const next = Math.min(prev + 2, 100);
          if (next >= 100) {
            clearInterval(intervalRef.current);
            clearInterval(lineInterval);
            setTimeout(() => {
              if (mountedRef.current) setFadeOut(true);
              setTimeout(() => {
                if (mountedRef.current) onComplete();
              }, 800);
            }, 500);
          }
          return next;
        });
      }
    }, 40);

    return () => {
      mountedRef.current = false;
      clearInterval(intervalRef.current);
      clearInterval(lineInterval);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    mountedRef.current = false;
    clearInterval(intervalRef.current);
    setFadeOut(true);
    setTimeout(() => onComplete(), 800);
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="terminal-intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="terminal-content">
            <div className="terminal-header">
              <span className="terminal-blink">NEURAL NETWORK BOOT SEQUENCE... &lt;loss=0.873&gt;</span>
            </div>

            <div className="terminal-lines">
              {visibleLines.map((line, i) => (
                <motion.p
                  key={i}
                  className="terminal-line"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="terminal-progress-container">
              <div className="terminal-progress-bar">
                <motion.div
                  className="terminal-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="terminal-progress-text">{progress}%</span>
            </div>

            {progress >= 100 && (
              <motion.p
                className="terminal-ready"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                MODEL CONVERGED — READY FOR INFERENCE
              </motion.p>
            )}

            {showSkip && (
              <button className="terminal-skip" onClick={handleSkip}>
                Skip Intro
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalIntro;
