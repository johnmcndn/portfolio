import { site } from '@/data/content';

export default function Footer() {
  return (
    <footer>
      <span>© {site.year} mac.dev</span>
      <span>
        {site.firstName} {site.lastName}
      </span>
    </footer>
  );
}
