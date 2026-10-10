import Image from 'next/image';
import { site } from '@/data/content';
import Nav from './Nav';

const Hero = () => {
  return (
    <header className='hero'>
      <Nav />

      <Image
        src='/images/john-marco.jpg'
        alt='Portrait of John Marco Condino'
        fill
        priority
        sizes='100vw'
      />

      <div className='hb'>
        <div className='hi'>Hey, my name is</div>

        <h1>
          <span className='big nm'>{site.firstName}</span>
          <span className='big nm o'>{site.lastName}</span>
        </h1>

        <p className='role'>
          I am a <b>web designer</b> and a <b>web developer</b>. I build clean,
          fast websites from first sketch to shipped code.
        </p>
      </div>
    </header>
  );
};

export default Hero;
