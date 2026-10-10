import { site } from '@/data/content';

const Contact = () => {
  return (
    <section className='ct' id='ct'>
      <h2 className='big'>
        Let&apos;s
        <br />
        <span className='ac'>talk</span>
      </h2>

      <a className='mag' href={`mailto:${site.email}`}>
        {site.email} →
      </a>

      <div className='sl'>
        <a href={site.github} target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        <a href={site.linkedin} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
