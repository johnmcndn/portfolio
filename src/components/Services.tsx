'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { revealRows } from '@/lib/animations';
import { services } from '@/data/content';

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => revealRows(root.current));
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className='sv' id='sv' ref={root}>
      {services.map(({ number, title, tools }) => (
        <div className='sr' key={number}>
          <span className='n'>{number}</span>
          <span className='t'>{title}</span>
          <span className='m'>{tools}</span>
        </div>
      ))}
      <div className='sr sr--cap' aria-hidden='true' />
    </section>
  );
}
