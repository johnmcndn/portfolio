import { site } from '@/data/content';

const Footer = () => {
  return (
    <footer>
      <span>© {site.year} mac.dev</span>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <span>
        {site.firstName} {site.lastName}
      </span>
    </footer>
  );
};

export default Footer;
