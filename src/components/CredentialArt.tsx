import type { CredentialArtKind } from '@/types/content';

// Shared line-art settings: purple outline with a faint fill. The colour comes from CSS (.cred .art).
const SVG_PROPS = {
  viewBox: '0 0 120 120',
  fill: 'currentColor',
  fillOpacity: 0.1,
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

/** Small decorative illustrations for the education and certificate cards. */
export default function CredentialArt({ kind }: { kind: CredentialArtKind }) {
  switch (kind) {
    case 'cap': // graduation cap
      return (
        <svg className='art' {...SVG_PROPS}>
          <path d='M60 28 L108 50 L60 72 L12 50 Z' />
          <path d='M30 61 V82 C30 90 45 98 60 98 C75 98 90 90 90 82 V61' />
          <path d='M108 50 V78' fill='none' />
          <circle cx='108' cy='82' r='4' fillOpacity={1} />
        </svg>
      );

    case 'badge': // certificate with a seal
      return (
        <svg className='art' {...SVG_PROPS}>
          <rect x='12' y='22' width='96' height='68' rx='6' />
          <path d='M28 42 H76 M28 56 H64 M28 70 H52' fill='none' />
          <circle cx='86' cy='68' r='12' />
          <path d='M80 79 L76 102 L86 95 L96 102 L92 79' />
        </svg>
      );

    case 'responsive': // laptop and phone
      return (
        <svg className='art' {...SVG_PROPS}>
          <rect x='6' y='30' width='70' height='46' rx='4' />
          <path d='M2 86 H80' fill='none' />
          <path d='M18 44 H60 M18 56 H48' fill='none' />
          <rect x='86' y='40' width='26' height='48' rx='5' />
          <circle cx='99' cy='81' r='1.8' fillOpacity={1} />
        </svg>
      );
  }
}
