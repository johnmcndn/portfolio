import { gsap } from '@/lib/gsap';

/**
 * Reveals every `.sr` row inside `root`: the row wipes in from the top
 * and its title slides in from the left.
 */
export function revealRows(root: HTMLElement | null): void {
  gsap.utils.toArray<HTMLElement>('.sr', root).forEach(row => {
    const scrollTrigger = { trigger: row, start: 'top 92%' };

    gsap.fromTo(
      row,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'expo.out',
        scrollTrigger,
      },
    );

    const title = row.querySelector('.t');
    if (title) {
      gsap.from(title, {
        xPercent: -8,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { ...scrollTrigger },
      });
    }
  });
}
