'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/content';
import Mockup from './Mockup';

// Register once, at the top level (not inside the component)
gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Cards stick near the top of the screen and the next card slides over them. */
const Projects = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.cd');
      const lastCard = cards[cards.length - 1];

      // Every card except the last sticks near the top until the last card arrives
      cards.slice(0, -1).forEach(card => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 11%', // where the card sticks (11% down from the top of the screen)
          endTrigger: lastCard,
          end: 'top 11%', // release when the last card reaches the same spot
          pin: true,
          pinSpacing: false, // the next card keeps flowing up underneath
        });
      });
    },
    { scope: root },
  );

  return (
    <section className='pj' id='pj' ref={root}>
      <div className='lab'>Selected work</div>
      <h2 className='big'>Projects</h2>

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
