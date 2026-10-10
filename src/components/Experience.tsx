import { education, experience } from '@/data/content';

const Experience = () => {
  return (
    <section className='ex' id='ex'>
      <div className='lab'>Experience</div>
      {experience.map(({ period, role, company }) => (
        <div className='sr' key={`${company}-${period}`}>
          <span className='n'>{period}</span>
          <span className='t'>{role}</span>
          <span className='m'>{company}</span>
        </div>
      ))}
      <p className='ed'>{education}</p>
    </section>
  );
};

export default Experience;
