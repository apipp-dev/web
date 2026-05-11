import React, { useState, useRef, useEffect } from 'react';

export const ColorComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const vidBeforeRef = useRef<HTMLVideoElement>(null);
  const vidAfterRef = useRef<HTMLVideoElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    if (vidBeforeRef.current && vidAfterRef.current) {
      const syncVideos = () => {
        if (Math.abs(vidBeforeRef.current!.currentTime - vidAfterRef.current!.currentTime) > 0.1) {
          vidBeforeRef.current!.currentTime = vidAfterRef.current!.currentTime;
        }
      };
      
      const interval = setInterval(syncVideos, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="max-w-sm mx-auto glass overflow-hidden relative aspect-[9/16] cursor-col-resize touch-none"
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
    >
      <video 
        ref={vidAfterRef}
        className="absolute inset-0 w-full h-full object-cover z-10"
        muted loop playsInline autoPlay
        src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778100942/CIne_Test_V2_m64jqe.mp4"
      />
      <video 
        ref={vidBeforeRef}
        className="absolute inset-0 w-full h-full object-cover z-20"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        muted loop playsInline autoPlay
        src="https://res.cloudinary.com/de2tlhnd6/video/upload/f_auto,q_auto/v1778101733/before_ddkv2w.mp4"
      />
      
      <div 
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-cyan shadow-[0_0_14px_rgba(0,242,254,0.55)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/><polyline points="9 18 3 12 9 6"/></svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-40 px-3.5 py-1.5 rounded-full glass border border-cyan/30 text-cyan text-[10px] font-black tracking-widest backdrop-blur-xl">
        BEFORE (RAW)
      </div>
      <div className="absolute bottom-4 right-4 z-40 px-3.5 py-1.5 rounded-full glass border border-violet-light/30 text-violet-light text-[10px] font-black tracking-widest backdrop-blur-xl">
        AFTER (GRADED)
      </div>
    </div>
  );
};
