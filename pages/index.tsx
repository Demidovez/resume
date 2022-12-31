import Head from 'next/head';
import Image from 'next/image';

import PageSection from '../components/PageSection';
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
        <div className={styles.about_me}>
          Мне {29} {1 ? 'лет' : 'год'}, живу в Республика Беларусь, г. Светлогорск. Женат, детей нет.<br />На данный момент работаю в ОАО "Светлогорский ЦКК" инженер-программистом.
        </div>
        <PageSection title="Мой стек" linkMore={'/stack'}>
          <div>
            <p>На текущий день мой стек фронтенд-разработки:<br /><span>JavaScript</span>, <span>TypeScript</span>, <span>React.js</span>, <span>Next.js</span>, <span>Redux</span>, <span>React Query</span>, <span>Git</span>, <span>Тестирование</span>.</p>

            <p>Основной мой вид деятельности фронтенд-разработка, но иногда приходилось заниматься и бекендом со следующим стеком:
              <span> Node.js</span>, <span>Docker</span>, <span>NGINX</span>, <span>Mongo</span>, <span>SQL</span>.
            </p>

            <p>Уровень английского языка Elementary (<span>А2</span>) - достаточно для чтения технической литературы и ведения простой переписки.</p>
          </div>
        </PageSection>
        <PageSection title="Мой опыт" linkMore={'/experience'}>
          <div>
            <p>В 2018 году закончил Гомельский государственный технический университет имени П.О.Сухого (Промышленная электроника).</p>
            <p>Затем начал работать (и работаю по сей день) на государственном предприятии по производству небеленой целлюлозы <a href="https://www.sckk.by/" target="_blank">ОАО "Светлогорский ЦКК"</a> инженер-прогаммистом.</p>
            <p>В мои задачи входит:</p>
            <ul>
              <li>разработка внутрених проектов под нужды предприятия (React.js, Redux, SQL, Node.js)</li>
              <li>разработка telegram-ботов как часть системы аналитики и уведомлений для сотрудников</li>
              <li>поддержка распредленной системы управления технологическим процессом производства (Honeywell EPKS)</li>
              <li>поддержка и развитие информационной системы управления (Honeywell Insight)</li>
              <li>поддержка системы SAP ТОРО (PM)</li>
            </ul>
            <p>В свободное от работы время изучаю фронтенд-разработку и введу несколько pet-проектов.</p>
          </div>
        </PageSection>
        <PageSection title="Мои проекты" linkMore={'/experience'}>
          <div><p>1111111</p></div>
        </PageSection>
      </main>
    </>
  );
}
