import { useEffect, useRef } from 'react';

// AutoScrollRow: horizontally scrolls its children automatically and hides native scrollbar
// Props:
// - speed: scroll speed multiplier (default 1)
// - pauseOnHover: whether hovering pauses scrolling (default true)
// - paused: external pause control (default false)
// - className: additional container classes
const AutoScrollRow = ({ children, speed = 1, pauseOnHover = true, className = '', paused = false, showControls = false }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    isPausedRef.current = !!paused;
  }, [paused]);

  useEffect(() => {
    const el = containerRef.current;
    const content = contentRef.current;
    if (!el || !content) return;

    // Prepare children as array
    const childArray = Array.isArray(children) ? children : [children];

    // compute half width (content duplicated in render)
    const computeHalfWidth = () => content.scrollWidth / 2 || 0;
    let halfWidth = computeHalfWidth();

    let lastTime = performance.now();
    const step = (time) => {
      if (!isPausedRef.current) {
        const dt = time - lastTime;
        const delta = (speed * dt) / 16; // frame-normalized
        el.scrollLeft += delta;
        if (halfWidth && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      lastTime = time;
      rafRef.current = requestAnimationFrame(step);
    };

    const updateHalf = () => {
      halfWidth = computeHalfWidth();
    };

    const ro = new ResizeObserver(updateHalf);
    ro.observe(content);

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [children, speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) isPausedRef.current = false;
  };

  const childArray = Array.isArray(children) ? children : [children];

  // expose latest paused prop for control handlers
  const pausedPropRef = useRef(paused);
  useEffect(() => {
    pausedPropRef.current = paused;
  }, [paused]);

  const scrollBy = (dir = 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.6) * (dir === 'left' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: 'smooth' });

    // temporarily pause auto-scroll while user interacts
    const prev = isPausedRef.current;
    isPausedRef.current = true;
    setTimeout(() => {
      isPausedRef.current = !!pausedPropRef.current;
    }, 800);
  };

  return (
    <div className="relative">
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none} .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}`}</style>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`overflow-x-auto no-scrollbar whitespace-nowrap py-3 ${className}`}
        style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <div ref={contentRef} className="inline-flex items-start">
          {childArray.map((child, i) => (
            <div key={`a-${i}`} className="inline-block align-top mr-4">
              {child}
            </div>
          ))}
          {childArray.map((child, i) => (
            <div key={`b-${i}`} className="inline-block align-top mr-4">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            onClick={() => scrollBy('left')}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 p-1 rounded-full shadow"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            {/* Left arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scrollBy('right')}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 p-1 rounded-full shadow"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            {/* Right arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default AutoScrollRow;
