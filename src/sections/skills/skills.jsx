import styles from './skillstyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext'

function Skills() {
    const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <hr style={{ height: 1, backgroundColor: 'lavender' }} />
        <div className={styles.skillList}>
            <h3>Web DEV</h3>
            
            <SkillList src={checkMarkIcon} skill = "HTML"/>      
            <SkillList src={checkMarkIcon} skill = "CSS"/>      
            <SkillList src={checkMarkIcon} skill = "JaVASCRIPT"/>      
            <SkillList src={checkMarkIcon} skill = "POSTMAN"/>      
            <SkillList src={checkMarkIcon} skill = "BOOSTRAP"/>      
            <SkillList src={checkMarkIcon} skill = "REACT"/>      
            <SkillList src={checkMarkIcon} skill = "NODE"/>      
            <SkillList src={checkMarkIcon} skill = "MONGO"/>      
            <SkillList src={checkMarkIcon} skill = "EXPRESS"/>      
            <SkillList src={checkMarkIcon} skill = "SQL"/>      
            <SkillList src={checkMarkIcon} skill = "ANGULAR"/>          
            <SkillList src={checkMarkIcon} skill = "Tailwind CSS"/>           
        </div>
        <hr/> 
        <div className={styles.skillList}>     
            <h3>Software DEV</h3>
            <SkillList src={checkMarkIcon} skill = "JAVASCRIPT"/>      
            <SkillList src={checkMarkIcon} skill = "PYTHON"/>      
            <SkillList src={checkMarkIcon} skill = "C"/>      
            <SkillList src={checkMarkIcon} skill = "C++"/>      
            <SkillList src={checkMarkIcon} skill = "JAVA"/>       
            <SkillList src={checkMarkIcon} skill = "GIT"/>      
            <SkillList src={checkMarkIcon} skill = "AUTOCAD"/>           
                       
        </div>
        <hr/>
        <div className={styles.skillList}>     
            <h3>Real life skills</h3>
            <SkillList src={checkMarkIcon} skill = "PROBLEM SOLVING"/>      
            <SkillList src={checkMarkIcon} skill = "ORGANIZING"/>      
            <SkillList src={checkMarkIcon} skill = "VIDEO EDITING"/>      
            <SkillList src={checkMarkIcon} skill = "BLENDER"/>      
            <SkillList src={checkMarkIcon} skill = "ANALYTICAL SKILLS"/>       
            <SkillList src={checkMarkIcon} skill = "COMUNICATION"/> 
        </div>
        <hr/>
        </section>
    
  )
}

export default Skills