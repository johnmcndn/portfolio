'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { site } from '@/data/content';

const MAGNET_STRENGTH = 0.4;

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const button = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const mail = button.current!;

        gsap.from('.ct-title', {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        });

        // Magnetic button: it leans toward the pointer and springs back on leave.
        const moveX = gsap.quickTo(mail, 'x', {
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
        const moveY = gsap.quickTo(mail, 'y', {
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });

        const onMove = (event: MouseEvent) => {
          const box = mail.getBoundingClientRect();
          moveX((event.clientX - box.left - box.width / 2) * MAGNET_STRENGTH);
          moveY((event.clientY - box.top - box.height / 2) * MAGNET_STRENGTH);
        };
        const onLeave = () => {
          moveX(0);
          moveY(0);
        };

        mail.addEventListener('mousemove', onMove);
        mail.addEventListener('mouseleave', onLeave);

        return () => {
          mail.removeEventListener('mousemove', onMove);
          mail.removeEventListener('mouseleave', onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className='ct' id='ct' ref={root}>
      <h2 className='big ct-title'>
        Let&apos;s
        <br />
        <span className='ac'>talk</span>
      </h2>

      <a className='mag' ref={button} href={`mailto:${site.email}`}>
        {site.email} →
      </a>

      <div className='sl'>
        <a href={site.github} target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        <a href={site.linkedin} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
