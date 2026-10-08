'use client';

import { useEffect, useState } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { navLinks } from '@/data/content';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault(); // stop the browser's instant jump
    setOpen(false); // close the mobile menu

    // wait one frame so html.menu-open is removed before scrolling
    requestAnimationFrame(() => {
      const smoother = ScrollSmoother.get(); // the one created in SmoothScroll.tsx

      if (smoother) {
        smoother.scrollTo(href, true, 'top 120px'); // true = animated
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  useEffect(() => {
    if (!open) return;

    document.documentElement.classList.add('menu-open');

    return () => {
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <nav aria-label='Primary' className={open ? 'is-open' : undefined}>
      <span className='lg'>
        mac<span className='ac'>.dev</span>
      </span>

      <button
        type='button'
        className='nav-toggle'
        aria-expanded={open}
        aria-controls='nav-links'
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(value => !value)}
      >
        <span />
        <span />
      </button>

      <div id='nav-links' className='nav-links'>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={event => handleNavClick(event, href)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
