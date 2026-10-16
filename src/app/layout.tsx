import type { Metadata, Viewport } from 'next';
import { Anton, Manrope } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import '@/styles/globals.scss';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});
const manrope = Manrope({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-site.vercel.app'), // needed so the image links are absolute
  title: 'mac.dev — John Marco Condino',
  description:
    'Web designer and web developer building fast, clean websites with React and Next.js.',
  openGraph: {
    title: 'mac.dev — John Marco Condino',
    description: 'Web designer and web developer.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${anton.variable} ${manrope.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
