import styles from './HeroStyle.module.css';
import heroimg from '../../assets/HERO.webp'
import heroimg1 from '../../assets/Screenshot 2024-09-13 004236.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import Instagramlight from '../../assets/icons8-instagram.svg'
import Instadark from '../../assets/insta-dark.svg'
import CV from '../../assets/resume.pdf'
import { useTheme } from '../../common/ThemeContext';
import TwitterLight from '../../assets/twitter-light.svg'
import TwitterDark from '../../assets/twitter-dark.svg'
import comingsooon from '../../assets/coming soon page.mp4'

function Hero() {
  
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const Linekdin = theme === 'light' ? linkedinlight : linkedindark;
  const Github = theme === 'light' ? githublight : githubdark;
  const INstagram = theme === 'light' ? Instagramlight : Instadark;
  const Twitter = theme === 'light' ? TwitterLight : TwitterDark
  

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colourModeContainer}>
            <img 
              className={styles.Hero}
              src={heroimg1}
              alt ='profile pic'
            />  
            <img 
            className={styles.colourMode}
            src={themeIcon}
             alt='colourmodechanger'
             onClick={toggleTheme}
             />
        </div>
        <div className={styles.info}>
            <h1>Lokesh<br /> Jasti</h1>
            <h3>Front end Developer</h3>
            <span>
            <a href="https://www.linkedin.com/in/lokesh-jasti-66a6a728b/" target='_blank'>
            <img src ={Linekdin} alt='linkedIN'></img>
            </a>
            <a href="https://github.com/LokeshJasti05" target='_blank'>
            <img src ={Github} alt='Git'></img>
            </a>
            <a href="https://www.instagram.com/jasti._.lokesh/" target='_blank'>
            <img src ={INstagram} alt='insta'></img>
            </a>
            <a href="https://x.com/GodLoki05" target='_blank'>
            <img src ={Twitter} alt='X'></img>
            </a>
            </span>
        
        <p className={styles.description}>
         With a passion for developing more projects to upgrade my skillset.
        </p>
        <a href={CV}>
          <button className='hover'>View Resume</button>
        </a>
        
        <a href={CV} download>
          <button className='hover' >Download Resume</button>
        </a>
        <a href={comingsooon}>
          <button className='hover'>View Projects</button>
        </a>
        </div>
    </section>
  )
}

export default Hero