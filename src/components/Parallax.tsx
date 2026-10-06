'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';

/**
 * "Behind the work": four frames (idea, design, code, launch) that drift at
 * different speeds while the section scrolls past.
 */
export default function Parallax() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        // Each frame moves at its own speed (data-speed).
        gsap.utils.toArray<HTMLElement>('.fr').forEach(frame => {
          const distance = Number(frame.dataset.speed) * 5;
          gsap.fromTo(
            frame,
            { y: () => -distance },
            {
              y: () => distance,
              ease: 'none',
              scrollTrigger: {
                trigger: root.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        // Frame 1: the wireframe sketch draws itself
        gsap.fromTo(
          '.sk *',
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: '.f1', start: 'top 85%' },
          },
        );

        // Frame 3: code lines type in one by one
        gsap.from('.f3 .cl', {
          opacity: 0,
          x: -14,
          duration: 0.6,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.f3', start: 'top 80%' },
        });

        // Frame 4: phone UI bars grow in
        gsap.from('.phn .l, .phn .b', {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.f4', start: 'top 80%' },
        });

        // Centre headline floats against the frames
        gsap.fromTo(
          '.mid',
          { y: 60 },
          {
            y: -60,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className='px' id='px' ref={root}>
      <div className='fr f1' data-speed='-18'>
        <span className='cap'>01 — Idea</span>
        <svg
          className='sk'
          viewBox='0 0 100 125'
          fill='none'
          stroke='#f2f0eb'
          strokeOpacity='.7'
          strokeWidth='.7'
          strokeLinecap='round'
        >
          <rect pathLength={1} x='12' y='26' width='76' height='12' rx='2' />
          <rect pathLength={1} x='12' y='44' width='76' height='34' rx='2' />
          <path
            pathLength={1}
            d='M12 44 L88 78 M88 44 L12 78'
            strokeOpacity='.25'
          />
          <rect pathLength={1} x='12' y='84' width='22' height='22' rx='2' />
          <rect pathLength={1} x='39' y='84' width='22' height='22' rx='2' />
          <rect pathLength={1} x='66' y='84' width='22' height='22' rx='2' />
          <circle
            pathLength={1}
            cx='82'
            cy='32'
            r='3'
            stroke='#a05cff'
            strokeOpacity='1'
          />
          <path
            pathLength={1}
            d='M70 14 Q80 8 84 24'
            stroke='#a05cff'
            strokeOpacity='1'
          />
          <path
            pathLength={1}
            d='M82 20 L84 25 L88 21'
            stroke='#a05cff'
            strokeOpacity='1'
          />
        </svg>
      </div>

      <div className='fr f2' data-speed='22'>
        <span className='cap'>02 — Design</span>
        <div className='ui'>
          <div className='bar' />
          <div className='bar w' />
          <div className='hr'>Aa</div>
          <div className='sw'>
            <i style={{ background: '#050505' }} />
            <i style={{ background: '#f2f0eb' }} />
            <i style={{ background: '#a05cff' }} />
          </div>
        </div>
      </div>

      <div className='mid'>
        <h2 className='big'>
          Behind the <span className='ac'>work</span>
        </h2>
      </div>

      <div className='fr f3' data-speed='-30'>
        <span className='cap'>03 — Code</span>
        <pre>
          <span className='cl'>
            <span className='c'>// every site starts as a few clean lines</span>
          </span>
          <span className='cl'>
            gsap.<span className='k'>from</span>(
            <span className='s'>&quot;.hero h1&quot;</span>, {'{'}
          </span>
          <span className='cl'>
            {'  '}yPercent: <span className='k'>110</span>,
          </span>
          <span className='cl'>
            {'  '}duration: <span className='k'>1</span>,
          </span>
          <span className='cl'>
            {'  '}ease: <span className='s'>&quot;expo.out&quot;</span>
          </span>
          <span className='cl'>{'});'}</span>
        </pre>
      </div>

      <div className='fr f4' data-speed='14'>
        <span className='cap'>04 — Launch</span>
        <div className='phn'>
          <div className='l' />
          <div className='l' style={{ width: '75%' }} />
          <div className='l s' />
          <div className='b'>Get started</div>
          <div className='lv'>
            <i />
            Live
          </div>
        </div>
      </div>
    </section>
  );
}
