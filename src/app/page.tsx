import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Parallax from '@/components/Parallax';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import SkillsStrip from '@/components/SkillsStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <main className='wrap'>
        <About />
        <Services />
        <Parallax />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
