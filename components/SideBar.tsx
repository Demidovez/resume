import BlobClipAvatar from './BlobClipAvatar';

import styles from '../styles/SideBar.module.scss';


const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <BlobClipAvatar 
          src="/images/avatar.jpg" 
          width={250}
          height={250} 
          alt="Фото Николай Демидовец"/>
        <div className={styles.indicator} />
      </div>
      <div className={styles.contacts}>
        <div>nikolaydemidovez@gmail.com</div>
        <div>t.me/demidovez</div>
      </div>
      <button className={styles.ask_me}>Задать вопрос</button>
    </div>
  );
};

export default SideBar;