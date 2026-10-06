'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { MOTION_OK, ScrollTrigger, gsap } from '@/lib/gsap';

const easeOutExpo = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
 * Also turns in-page `#anchor` links into smooth scrolls.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia(MOTION_OK).matches) return;

    const lenis = new Lenis({ duration: 1.2, easing: easeOutExpo });
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const hash = link?.getAttribute('href');
      if (!hash || hash.length < 2) return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { duration: 1.6, easing: easeOutExpo });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
