import React, { useEffect, useState, useRef } from 'react';

export const Counter = ({ target, duration = 800 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(target);
  const prevTargetRef = useRef(target);

  useEffect(() => {
    const start = count;
    const end = target;
    if (start === end) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuad
      const ease = progress * (2 - progress);
      const currentVal = Math.floor(start + (end - start) * ease);
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <span>{count.toLocaleString('id-ID')}</span>;
};
