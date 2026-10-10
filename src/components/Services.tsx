import { services } from '@/data/content';

const Services = () => {
  return (
    <section className='sv' id='sv'>
      {services.map(({ number, title, tools }) => (
        <div className='sr' key={number}>
          <span className='n'>{number}</span>
          <span className='t'>{title}</span>
          <span className='m'>{tools}</span>
        </div>
      ))}
      <div className='sr sr--cap' aria-hidden='true' />
    </section>
  );
};

export default Services;
