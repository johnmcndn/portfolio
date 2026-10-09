'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Parallax = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.mid .big',
      pin: true,
      start: 'center center',
      end: '+=500',
    });

    // --- Skew the frames while scrolling ---
    const frames = gsap.utils.toArray<HTMLElement>('.f1, .f2, .f3, .f4');
    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(frames, 'skewY', 'deg'); // fast
    const clamp = gsap.utils.clamp(-20, 20); // never skew more than 20 degrees

    // make the right edge "stick" to the scroll bar. force3D improves performance
    gsap.set(frames, { transformOrigin: 'right center', force3D: true });

    ScrollTrigger.create({
      trigger: '.px', // only react while this section is on screen
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: self => {
        const skew = clamp(self.getVelocity() / -300);

        // Only react to a stronger skew; the tween eases back to 0 on its own
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  });

  return (
    <section className='px' id='px'>
      <div className='fr f1'>
        <span className='cap'>01 — Idea</span>
        <svg
          viewBox='0 0 100 125'
          fill='none'
          stroke='#f2f0eb'
          strokeOpacity='.7'
          strokeWidth='.7'
          strokeLinecap='round'
        >
          <rect x='12' y='26' width='76' height='12' rx='2' />
          <rect x='12' y='44' width='76' height='34' rx='2' />
          <path d='M12 44 L88 78 M88 44 L12 78' strokeOpacity='.25' />
          <rect x='12' y='84' width='22' height='22' rx='2' />
          <rect x='39' y='84' width='22' height='22' rx='2' />
          <rect x='66' y='84' width='22' height='22' rx='2' />
          <circle cx='82' cy='32' r='3' stroke='#a05cff' strokeOpacity='1' />
          <path d='M70 14 Q80 8 84 24' stroke='#a05cff' strokeOpacity='1' />
          <path d='M82 20 L84 25 L88 21' stroke='#a05cff' strokeOpacity='1' />
        </svg>
      </div>

      <div className='fr f2'>
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

      <div className='fr f3'>
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

      <div className='fr f4'>
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
};

export default Parallax;
