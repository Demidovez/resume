import Image from 'next/image';
import { useState } from 'react';

import MoonIcon from '../assets/svg/moon.svg';
import SunIcon from '../assets/svg/sun.svg';
import styles from '../styles/ThemeToggle.module.scss';

const ThemeToggle = () => {
  const [ isEnabled, setIsEnabled ] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className={styles.container} htmlFor="toggle">
      <div className={`${styles.toggle} ${isEnabled ? styles.enabled : ''}`}>
        <div className={`${styles.icons}`}>
          <SunIcon />
          <MoonIcon/>
              
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onChange={toggleState}
        />
      </div>
    </label>
  );
};

export default ThemeToggle;
