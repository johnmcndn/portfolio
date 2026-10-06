'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { revealRows } from '@/lib/animations';
import { education, experience } from '@/data/content';

/** Deliberately quiet: small dim rows that reuse the services row style. */
export default function Experience() {
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
    <section className='ex' id='ex' ref={root}>
      <div className='lab'>Experience</div>
      {experience.map(({ period, role, company }) => (
        <div className='sr' key={`${company}-${period}`}>
          <span className='n'>{period}</span>
          <span className='t'>{role}</span>
          <span className='m'>{company}</span>
        </div>
      ))}
      <p className='ed'>{education}</p>
    </section>
  );
}
