import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const onMouse = (e) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
      }
    };

    const onHover = () => {
      document.body.classList.add('cursor-hover');
    };
    const onLeave = () => {
      document.body.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', onMouse);

    const targets = document.querySelectorAll('a, button, .project-card, .tag, .btn, .social-link, .cert-card, .edu-card');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouse);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} />
      <div className="custom-cursor-ring" ref={cursorRef} />
    </>
  );
};

export default CustomCursor;
