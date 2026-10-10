'use client';

import { useRef } from 'react';
import { MOTION_OK, gsap, useGSAP } from '@/lib/gsap';
import { projects } from '@/data/content';
import Mockup from './Mockup';

/** Cards stack with `position: sticky`; earlier cards shrink and fade as the next one arrives. */
const Projects = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const cards = gsap.utils.toArray<HTMLElement>('.cd');

        cards.slice(0, -1).forEach((card, index) => {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[index + 1],
              start: 'top 88%',
              end: 'top 11%',
              scrub: true,
            },
          });
        });

        gsap.from('.bars i', {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 0.8,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.bars', start: 'top 90%' },
        });

        gsap.utils.toArray<HTMLElement>('.cd .mk').forEach(mockup => {
          gsap.fromTo(
            mockup,
            { y: 40 },
            {
              y: -16,
              ease: 'none',
              scrollTrigger: {
                trigger: mockup.parentElement,
                start: 'top bottom',
                end: 'top 11%',
                scrub: true,
              },
            },
          );
        });

        gsap.from('.pj-head', {
          yPercent: 60,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: root.current, start: 'top 85%' },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className='pj' id='pj' ref={root}>
      <div className='lab pj-head'>Selected work</div>
      <h2 className='big pj-head'>Projects</h2>

      {projects.map(
        ({ number, category, title, description, tags, mockup, href }) => (
          <article className='cd' key={number}>
            <div className='tx'>
              <div className='top'>
                <span>{number}</span>
                <span>{category}</span>
              </div>
              <div>
                <h3 className='big'>{title}</h3>
                <p>{description}</p>
                <div className='tg'>
                  {tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {href ? (
                <a
                  className='vw'
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View project →
                </a>
              ) : (
                <span className='vw'>View project →</span>
              )}
            </div>
            <Mockup kind={mockup} />
          </article>
        ),
      )}
    </section>
  );
};

export default Projects;
