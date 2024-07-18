import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';


function Skills() {
   const { theme } = useTheme();
  const checkMarkIcon = theme === 'dark' ? checkMarkDark : checkMarkLight



  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList 
           src={checkMarkIcon}
           skill = 'HTML'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'CSS'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'JavaScript'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'React'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'Node'
           />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList 
           src={checkMarkIcon}
           skill = 'Firebase'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'MySQL'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'Threejs'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'Vue'
           />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList 
           src={checkMarkIcon}
           skill = 'Git'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'Jest'
           />
           <SkillList 
           src={checkMarkIcon}
           skill = 'Blender'
           />
        </div>
    </section>
  )
}

export default Skills
