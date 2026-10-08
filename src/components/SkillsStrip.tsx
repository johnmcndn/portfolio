'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { skills } from '@/data/content';

// Rendered twice so the loop can restart without a visible jump.
const LOOPED_SKILLS = [...skills, ...skills];

const LOOP_SECONDS = 100; // time for one full loop (bigger = slower)
const HOVER_SPEED = 0.2; // 1 = normal speed, 0.2 = 20% speed while hovered

export default function SkillsStrip() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const loop = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      loop.current = gsap.fromTo(
        track.current,
        { xPercent: 0 },
        { xPercent: -50, duration: LOOP_SECONDS, ease: 'none', repeat: -1 },
      );
    },
    { scope: root },
  );

  const setSpeed = (speed: number) => {
    if (loop.current) {
      gsap.to(loop.current, {
        timeScale: speed,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: true,
      });
    }
  };

  return (
    <div
      className='mq'
      ref={root}
      onMouseEnter={() => setSpeed(HOVER_SPEED)}
      onMouseLeave={() => setSpeed(1)}
    >
      <div className='tk' ref={track}>
        {LOOPED_SKILLS.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
