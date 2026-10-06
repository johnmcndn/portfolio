'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.from('.statement span', {
          yPercent: 110,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.15,
          scrollTrigger: { trigger: '.statement', start: 'top 82%' },
        });
        gsap.from('.about-copy, .lab', {
          y: 24,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 80%' },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className='st' ref={root}>
      <div className='lab'>About</div>
      <h2 className='big statement'>
        <span>I design it.</span>
        <span>I build it.</span>
        <span className='ac'>I ship it.</span>
      </h2>
      <p className='about-copy'>
        3+ years building fast, accessible interfaces with React and Next.js.
        Frontend today, full-stack tomorrow.
      </p>
    </section>
  );
}
