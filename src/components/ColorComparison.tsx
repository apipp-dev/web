import React, { useState, useRef, useEffect } from 'react';

export const ColorComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const vidBeforeRef = useRef<HTMLVideoElement>(null);
  const vidAfterRef = useRef<HTMLVideoElement>(null);

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startSliderPosRef = useRef(50);
  const pointerDownActiveRef = useRef(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only process left click / single touch
    
    pointerDownActiveRef.current = true;
    setIsDragging(false);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    startSliderPosRef.current = sliderPosition;
    
    // Set pointer capture to keep receiving moves even if the pointer leaves the element bounds
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownActiveRef.current) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const currentX = e.clientX;
    const currentY = e.clientY;
    const diffX = currentX - startXRef.current;
    const diffY = currentY - startYRef.current;
    
    if (!isDragging) {
      const absDiffX = Math.abs(diffX);
      const absDiffY = Math.abs(diffY);
      
      // If we move a bit, see if it is a horizontal slide or vertical scroll
      if (absDiffX > 8 && absDiffX > absDiffY) {
        setIsDragging(true);
      } else if (absDiffY > 8) {
        // Vertical swipe detected, release pointer capture and ignore to let body scroll
        pointerDownActiveRef.current = false;
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch (err) {}
        return;
      }
    }
    
    if (isDragging) {
      const deltaPercent = (diffX / rect.width) * 100;
      const newPos = Math.max(0, Math.min(100, startSliderPosRef.current + deltaPercent));
      setSliderPosition(newPos);
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerDownActiveRef.current) {
      // If it was a quick tap without movement and within boundaries, set slider to tap location
      if (!isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
      }
      
      pointerDownActiveRef.current = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDownActiveRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  useEffect(() => {
    const beforeVideo = vidBeforeRef.current;
    const afterVideo = vidAfterRef.current;
    if (!beforeVideo || !afterVideo) return;

    const handlePlay = () => {
      beforeVideo.currentTime = afterVideo.currentTime;
      beforeVideo.play().catch(() => {});
    };

    const handlePause = () => {
      beforeVideo.pause();
    };

    const handleSeeking = () => {
      beforeVideo.currentTime = afterVideo.currentTime;
    };

    const handleRateChange = () => {
      beforeVideo.playbackRate = afterVideo.playbackRate;
    };

    afterVideo.addEventListener('play', handlePlay);
    afterVideo.addEventListener('pause', handlePause);
    afterVideo.addEventListener('seeking', handleSeeking);
    afterVideo.addEventListener('seeked', handleSeeking);
    afterVideo.addEventListener('ratechange', handleRateChange);

    // Initial check: align
    beforeVideo.currentTime = afterVideo.currentTime;

    return () => {
      afterVideo.removeEventListener('play', handlePlay);
      afterVideo.removeEventListener('pause', handlePause);
      afterVideo.removeEventListener('seeking', handleSeeking);
      afterVideo.removeEventListener('seeked', handleSeeking);
      afterVideo.removeEventListener('ratechange', handleRateChange);
    };
  }, []);

  // IntersectionObserver to only play videos when in viewport
  useEffect(() => {
    const container = containerRef.current;
    const afterVideo = vidAfterRef.current;
    if (!container || !afterVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          afterVideo.play().catch(() => {});
        } else {
          afterVideo.pause();
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="max-w-sm mx-auto glass overflow-hidden relative aspect-[9/16] cursor-col-resize touch-pan-y select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <video 
        ref={vidAfterRef}
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        muted loop playsInline
        src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778100942/CIne_Test_V2_m64jqe.mp4"
      />
      <video 
        ref={vidBeforeRef}
        className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        muted loop playsInline
        src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778101733/before_ddkv2w.mp4"
      />
      
      {/* Slider Bar & Handle */}
      <div 
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-cyan shadow-[0_0_14px_rgba(0,242,254,0.55)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/90 border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-200 pointer-events-none ${
            isDragging 
              ? 'scale-110 border-cyan text-cyan shadow-[0_0_15px_rgba(0,242,254,0.4)]' 
              : 'text-white/80'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-pulse"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-40 px-3.5 py-1.5 rounded-full bg-black/75 border border-cyan/30 text-cyan text-[10px] font-black tracking-widest backdrop-blur-xl">
        BEFORE (RAW)
      </div>
      <div className="absolute bottom-4 right-4 z-40 px-3.5 py-1.5 rounded-full bg-black/75 border border-violet-light/30 text-violet-light text-[10px] font-black tracking-widest backdrop-blur-xl">
        AFTER (GRADED)
      </div>
    </div>
  );
};
