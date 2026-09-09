import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <p>johnmcndn</p>
          <ul>
            <li>Home</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.hero}></section>
      </main>
    </div>
  );
}
