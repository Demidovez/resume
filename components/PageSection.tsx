import Link from 'next/link';

import styles from '../styles/PageSection.module.scss';

interface IProps {
    title: string;
    linkMore: string;
    children: JSX.Element;
}

const PageSection = ({ title, linkMore, children }: IProps) => {
  return (
    <div className={styles.container}>
      <Link href={linkMore} className={styles.header}><h3>{title}</h3></Link>
      {children}
      <Link href={linkMore} className={styles.more}>Подробнее...</Link>
    </div>
  );
  
};

export default PageSection;