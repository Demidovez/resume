import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Резюме | Демидовец Николай</title>
        <meta name="description" content="Резюме для Николая Демидовца" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.introduce}>
          <div>
            <div className={styles.preffix}>Привет! Меня зовут</div>
            <h1>Николай Демидовец!</h1>
            <h3>И я React.js - разработчик</h3>
          </div>
          <button>Скачать резюме в PDF</button>
        </div>
      </main>
    </>
  );
}
