import { useEffect, useRef } from 'react';

// AutoScrollRow: horizontally scrolls its children automatically and hides native scrollbar
// Props:
// - speed: scroll speed multiplier (default 1)
// - pauseOnHover: whether hovering pauses scrolling (default true)
// - paused: external pause control (default false)
// - className: additional container classes
const AutoScrollRow = ({ children, speed = 1, pauseOnHover = true, className = '', paused = false }) => {
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

  return (
    <div>
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
    </div>
  );
};

export default AutoScrollRow;
