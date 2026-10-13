import { processSteps, site } from '@/data/content';

/** "Behind the work": four process steps as full-width rows. */
const Process = () => {
  return (
    <section className='pr' id='pr'>
      <div className='pr-meta'>
        <span className='tag'>Behind the work</span>
        <span className='plus'>+</span>
        <span>[{site.year}]</span>
      </div>

      <h2 className='big pr-title'>
        From first idea to
        <br />
        <span className='ac'>lasting impact</span>
      </h2>

      <div className='pr-list'>
        {processSteps.map(({ number, label, title, text, result }) => (
          <div className='pr-row' key={number}>
            <article className='pr-step'>
              <div className='head'>
                <span className='num'>{number}</span>
                <span>{label}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className='result'>{result}</div>
            </article>
          </div>
        ))}

        <p className='pr-note'>
          Every project starts with <b>understanding</b>. I align on{' '}
          <b>goals</b>, shape the <b>right design</b>, and turn ideas into{' '}
          <b>fast, thoughtful websites</b>.
        </p>
      </div>
    </section>
  );
};

export default Process;
