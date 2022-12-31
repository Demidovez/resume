import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandGithub, TbBrandTelegram } from 'react-icons/tb';

import BlobClipAvatar from './BlobClipAvatar';
import Skills from './Skills';

import Blob from '../assets/svg/blob.svg';
import styles from '../styles/SideBar.module.scss';


const SideBar = () => {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      <div className={styles.avatar}>
        <BlobClipAvatar 
          src="/images/avatar.jpg" 
          width={250}
          height={250} 
          alt="Фото Николай Демидовец"
        />
        <div className={styles.indicator} />
      </div>
      <div className={styles.contacts}>
        <a href='mailto:nikolaydemidovez@gmail.com'><HiOutlineMail size="1.8rem" /><span>nikolaydemidovez@gmail.com</span></a>
        <a href="https://t.me/demidovez" target="_blank"><TbBrandTelegram size="1.8rem"/><span>t.me/demidovez</span></a>
        <a href="https://github.com/Demidovez" target="_blank"><TbBrandGithub size="1.8rem"/><span>github.com/Demidovez</span></a>
      </div>
      <button className={styles.ask_me}>Задать вопрос</button>
      <Skills />
    </div>
  );
};

export default SideBar;