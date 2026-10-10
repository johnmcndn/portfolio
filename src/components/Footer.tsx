import { site } from '@/data/content';

const Footer = () => {
  return (
    <footer>
      <span>© {site.year} mac.dev</span>
      <span>
        {site.firstName} {site.lastName}
      </span>
    </footer>
  );
};

export default Footer;
