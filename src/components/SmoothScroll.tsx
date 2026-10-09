'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Smoother() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
    });
  }, []);

  return null;
}

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Smoother />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>{children}</div>
      </div>
    </>
  );
};

export default SmoothScroll;
