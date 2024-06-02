

import Head from 'next/head';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Mobile App</title>
        <meta name="description" content="Landing page for My Mobile App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>MyApp</div>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to MyApp First landing page </h1>
          <p className={styles.description}>Your all-in-one solution for managing your daily tasks efficiently.</p>
          <a className={styles.cta} href="#download">Download Now</a>
        </section>

        <section id="features" className={styles.features}>
          <h2>Features</h2>
          <div className={styles.feature}>
            <h3>Easy to Use</h3>
            <p>Intuitive design and simple navigation make it easy for anyone to use.</p>
          </div>
          <div className={styles.feature}>
            <h3>Cross-Platform</h3>
            <p>Available on iOS and Android devices.</p>
          </div>
          <div className={styles.feature}>
            <h3>Secure</h3>
            <p>We prioritize your security and privacy above all.</p>
          </div>
        </section>

        <section id="download" className={styles.download}>
          <h2>Download MyApp</h2>
          <a className={styles.appStoreButton} href="#">App Store</a>
          <a className={styles.playStoreButton} href="#">Google Play</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
