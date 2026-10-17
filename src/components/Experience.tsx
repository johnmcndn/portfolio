import { credentials, experience, site } from '@/data/content';
import CredentialArt from './CredentialArt';

/** Deliberately quiet: small dim rows that reuse the services row style. */
const Experience = () => {
  return (
    <section className='ex' id='ex'>
      <div className='ex-head'>
        <div className='lab'>Experience</div>
        <a className='ex-cv' href={site.resume} download={site.resumeFileName}>
          Download résumé ↓
        </a>
      </div>

      {experience.map(({ period, role, company }) => (
        <div className='sr' key={`${company}-${period}`}>
          <span className='n'>{period}</span>
          <span className='t'>{role}</span>
          <span className='m'>{company}</span>
        </div>
      ))}
      <div className='sr sr--cap' aria-hidden='true' />

      <div className='ex-credentials'>
        <div className='lab'>Education &amp; certificates</div>
        <div className='cred-grid'>
          {credentials.map(({ kind, title, detail, art }) => (
            <article className='cred' key={title}>
              <CredentialArt kind={art} />
              <span className='kind'>{kind}</span>
              <h3>{title}</h3>
              {detail && <p>{detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
