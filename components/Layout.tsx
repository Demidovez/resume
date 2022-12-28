import Header from './Header';
import SideBar from './SideBar';

import styles from '../styles/Layout.module.scss';

interface IProps {
    children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <SideBar />
        <div className={styles.content}>
          <div className={styles.page}>
            { children }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;