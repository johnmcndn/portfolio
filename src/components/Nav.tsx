'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/data/content';

/**
 * Desktop: logo on the left, links on the right.
 * Mobile (see styles/_nav.scss): links live in a full-screen menu opened by the button.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.documentElement.classList.add('menu-open');
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.classList.remove('menu-open');
      document.removeEventListener('keydown', onKeyDown);
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
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
