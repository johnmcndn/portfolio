'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { site } from '@/data/content';
import Nav from './Nav';

/** Wraps every character in a span so each one can be animated on its own. */
function SplitText({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className='ch'>
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  const firstName = useRef<HTMLSpanElement>(null);
  const lastName = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const chars = (line: HTMLElement | null) =>
          line?.querySelectorAll('.ch') ?? [];
        const scrubOnHeroExit = () => ({
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        });

        // Intro timeline
        gsap
          .timeline()
          .fromTo(
            photo.current,
            { clipPath: 'inset(100% 0 0 0)', scale: 1.3 },
            {
              clipPath: 'inset(0% 0 0 0)',
              scale: 1,
              duration: 1.6,
              ease: 'expo.inOut',
            },
          )
          .from(
            '.hi',
            { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.5',
          )
          .from(
            chars(firstName.current),
            { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.04 },
            '-=0.5',
          )
          .from(
            chars(lastName.current),
            { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.05 },
            '-=0.95',
          )
          .from(
            '.role, nav',
            {
              y: 20,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'transform',
            },
            '-=0.7',
          );

        // Scroll-linked motion while leaving the hero
        gsap.to(firstName.current, {
          x: '-5vw',
          ease: 'none',
          scrollTrigger: scrubOnHeroExit(),
        });
        gsap.to(lastName.current, {
          x: '5vw',
          ease: 'none',
          scrollTrigger: scrubOnHeroExit(),
        });
        gsap.to(photo.current, {
          yPercent: 12,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: scrubOnHeroExit(),
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <header className='hero' ref={root}>
      <Nav />

      <Image
        ref={photo}
        src='/images/john-marco.jpg'
        alt='Portrait of John Marco Condino'
        fill
        priority
        sizes='100vw'
      />

      <div className='hb'>
        <div className='hi'>Hey, my name is</div>

        <h1>
          <span className='clip'>
            <span
              className='big nm'
              ref={firstName}
              aria-label={site.firstName}
            >
              <SplitText text={site.firstName} />
            </span>
          </span>
          <span className='clip'>
            <span
              className='big nm o'
              ref={lastName}
              aria-label={site.lastName}
            >
              <SplitText text={site.lastName} />
            </span>
          </span>
        </h1>

        <p className='role'>
          I am a <b>web designer</b> and a <b>web developer</b>. I build clean,
          fast websites from first sketch to shipped code.
        </p>
      </div>
    </header>
  );
}
