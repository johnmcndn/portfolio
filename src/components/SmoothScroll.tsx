'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 1.5,
      });
    },
    { scope: main },
  );

  return (
    <div id='smooth-wrapper' ref={main}>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};

export default SmoothScroll;
