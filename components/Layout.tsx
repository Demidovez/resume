import Header from './Header';
import SideBar from './SideBar';

import styles from '../styles/Layout.module.scss';

interface IProps {
    children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <Header />
        <div className={styles.page}>
          { children }
        </div>
        
      </div>
    </div>
  );
};

export default Layout;