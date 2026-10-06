'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { skills } from '@/data/content';

// The list is rendered twice so the strip can slide half its width without a gap.
const LOOPED_SKILLS = [...skills, ...skills];

/**
 * Not a timed marquee: the strip is tied to scroll position.
 * Scrolling down slides it right, scrolling up slides it back left.
 */
export default function SkillsStrip() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          track.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className='mq' ref={root}>
      <div className='tk' ref={track}>
        {LOOPED_SKILLS.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
