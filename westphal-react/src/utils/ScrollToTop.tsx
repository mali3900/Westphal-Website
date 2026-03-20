import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const animationFrame = useRef<number | null>(null);
  const userScrolled = useRef(false);

  const smoothScrollToTop = (duration = 800) => {
    const start = window.scrollY || window.pageYOffset;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scroll = (currentTime: number) => {
      if (userScrolled.current) return; // stop if user scrolls

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      window.scrollTo(0, start * (1 - easedProgress));

      if (elapsed < duration) {
        animationFrame.current = requestAnimationFrame(scroll);
      } else {
        animationFrame.current = null;
      }
    };

    animationFrame.current = requestAnimationFrame(scroll);
  };

  // Expose programmatic smooth scroll so other components (like Footer) can call it
  // attached to window as `scrollToTopSmooth` while this component is mounted.
  // This keeps the scrolling implementation centralized here.
  (window as any).scrollToTopSmooth = smoothScrollToTop;

  useLayoutEffect(() => {
    userScrolled.current = false;

    const onUserScroll = () => {
      userScrolled.current = true;
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };

    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchstart", onUserScroll, { passive: true });

    const id = setTimeout(() => smoothScrollToTop(10), 50);

    return () => {
      clearTimeout(id);
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchstart", onUserScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      // clean up the exposed function
      try {
        delete (window as any).scrollToTopSmooth;
      } catch (e) {
        (window as any).scrollToTopSmooth = undefined;
      }
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
