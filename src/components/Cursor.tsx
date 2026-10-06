'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

interface HoverStyle {
  selector: string;
  size: number;
  background: string;
  label: string;
}

/** First matching selector wins, so order matters. */
const HOVER_STYLES: HoverStyle[] = [
  { selector: '.mag', size: 54, background: '#f2f0eb', label: '' },
  { selector: '.cd', size: 96, background: '#f2f0eb', label: 'View' },
  { selector: '.fr', size: 70, background: '#f2f0eb', label: '' },
  { selector: '.sr', size: 56, background: '#f2f0eb', label: '' },
  { selector: 'a', size: 54, background: '#a05cff', label: '' },
];

const DOT_REST = {
  width: 18,
  height: 18,
  backgroundColor: 'rgba(160, 92, 255, 0)',
  borderColor: '#f2f0eb',
};
const DIM_TRAIL_SELECTOR = '.cd, .fr, .sr, .mag, a';
const TRAIL_LENGTH = 9;
const blobSize = (index: number): number => 28 - index * 2.4;

/**
 * Circle cursor that changes on hover, plus a "liquid" trail: blobs lag behind
 * the pointer and the SVG goo filter melts them together.
 * Only runs for fine pointers (mouse) when motion is allowed.
 */
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
      () => {
        const cursor = cursorRef.current!;
        const dot = dotRef.current!;
        const trail = trailRef.current!;
        const blobs = Array.from(trail.children) as HTMLElement[];

        document.documentElement.classList.add('cur-on');

        const moveCursorX = gsap.quickTo(cursor, 'x', {
          duration: 0.35,
          ease: 'power3',
        });
        const moveCursorY = gsap.quickTo(cursor, 'y', {
          duration: 0.35,
          ease: 'power3',
        });

        const blobMoves = blobs.map((blob, index) => {
          gsap.set(blob, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
          const options = { duration: 0.1 + index * 0.07, ease: 'power3' };
          return {
            x: gsap.quickTo(blob, 'x', options),
            y: gsap.quickTo(blob, 'y', options),
          };
        });

        // The lead blob stretches while the pointer moves fast, then settles.
        const stretch = gsap.quickTo(blobs[0], 'scale', {
          duration: 0.3,
          ease: 'power3',
        });
        const settle = gsap.delayedCall(0.1, () => stretch(1));

        let hasMoved = false;
        let lastX = 0;
        let lastY = 0;

        const onMove = (event: MouseEvent) => {
          const { clientX: x, clientY: y } = event;

          if (!hasMoved) {
            gsap.set(cursor, { x, y });
            blobs.forEach(blob => gsap.set(blob, { x, y }));
            gsap.to(cursor, { opacity: 1, duration: 0.4 });
            hasMoved = true;
          }

          moveCursorX(x);
          moveCursorY(y);
          blobMoves.forEach(move => {
            move.x(x);
            move.y(y);
          });

          stretch(1 + Math.min(Math.hypot(x - lastX, y - lastY) / 70, 1));
          lastX = x;
          lastY = y;
          settle.restart(true);
        };

        const onOver = (event: MouseEvent) => {
          const target = event.target as Element;
          const match = HOVER_STYLES.find(style =>
            target.closest(style.selector),
          );

          gsap.to(trail, {
            opacity: target.closest(DIM_TRAIL_SELECTOR) ? 0.3 : 1,
            duration: 0.3,
          });
          dot.textContent = match?.label ?? '';
          gsap.to(dot, {
            ...(match
              ? {
                  width: match.size,
                  height: match.size,
                  backgroundColor: match.background,
                  borderColor: match.background,
                }
              : DOT_REST),
            duration: 0.4,
            ease: 'power3.out',
          });
        };

        const onLeave = () =>
          gsap.to([cursor, trail], { opacity: 0, duration: 0.3 });
        const onEnter = () =>
          gsap.to([cursor, trail], { opacity: 1, duration: 0.3 });

        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);

        return () => {
          document.documentElement.classList.remove('cur-on');
          window.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseover', onOver);
          document.removeEventListener('mouseleave', onLeave);
          document.removeEventListener('mouseenter', onEnter);
          settle.kill();
        };
      },
    );

    return () => mm.revert();
  });

  return (
    <>
      <svg
        width='0'
        height='0'
        style={{ position: 'absolute' }}
        aria-hidden='true'
      >
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='9' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>

      <div id='liq' ref={trailRef} aria-hidden='true'>
        {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
          <i
            key={index}
            style={{ width: blobSize(index), height: blobSize(index) }}
          />
        ))}
      </div>

      <div id='cur' ref={cursorRef} aria-hidden='true'>
        <span id='curd' ref={dotRef} />
      </div>
    </>
  );
}
