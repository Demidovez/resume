import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

import styles from '../styles/Header.module.scss';

const PAGES = [
  {
    label: 'Главная',
    link: '/',
  },
  {
    label: 'Стек',
    link: '/stack',
  },
  {
    label: 'Опыт',
    link: '/experience',
  },
  {
    label: 'Проекты',
    link: '/projects',
  },
  {
    label: 'Обо мне',
    link: '/about',
  },
  {
    label: 'Контакты',
    link: '/contacts',
  },
];

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>{PAGES.map(page => <div key={page.link} className={styles.page}><Link  href={page.link}>{page.label}</Link></div>)}</div>
      <div className={styles.settings}>
        <div className={styles.nigth}><ThemeToggle /></div>
        <div className={styles.lang}><span>en</span></div>
        <div className={styles.login}><span>войти</span></div>
      </div>
    </div>
  );
};

export default Header;
