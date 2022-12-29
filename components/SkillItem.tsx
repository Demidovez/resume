import styles from '../styles/SkillItem.module.scss';
import { ISkill } from '../types';

interface IProps {
    data: ISkill;
    className?: string;
}

const SkillItem = ({ data, className }: IProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <p>{data.label}<span>{data.level || 0}<span>%</span></span></p>
      <div className={styles.level}><div style={{ width: `${Math.min(data.level || 0, 100)}%` }} /></div>
    </div>
  );
};

export default SkillItem;