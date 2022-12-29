import SkillItem from './SkillItem';

import styles from '../styles/Skills.module.scss';
import { ISkill } from '../types';

const SKILLS: ISkill[] = [
  {
    label: 'JavaScript',
    level: 85,
  },
  {
    label: 'React.js',
    level: 90,
  },
  {
    label: 'Next.js',
    level: 80,
  },
  {
    label: 'Redux',
    level: 70,
  },
  {
    label: 'React Query',
    level: 75,
  },
  {
    label: 'TypeScript',
    level: 70,
  },
  {
    label: 'Docker',
    level: 60,
  },
  {
    label: 'Node.js',
    level: 50,
  },
  {
    label: 'Mongo',
    level: 50,
  },
  {
    label: 'Git',
    level: 50,
  },
  {
    label: 'Тестирование',
    level: 40,
  },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <h4>Мои знания</h4>
      <div className={styles.skills}>
        {
          SKILLS.map(skill => <SkillItem data={skill} key={skill.label} className={styles.skill} />)
        }
      </div>
    </div>
  );
};

export default Skills;