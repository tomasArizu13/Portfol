import styles from './HeroStyles.module.css'
import heroImgDark from '../../assets/AvatarDark.png'
import heroImgLight from '../../assets/AvatarLight.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import instagramDark from '../../assets/instagram-dark.svg'
import instagramLight from '../../assets/instagram-light.svg'
import githubDark from '../../assets/github-dark.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import CV from '../../assets/Cv English.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme  === 'dark' ? moon : sun
  const heroImg = theme === 'dark' ? heroImgDark : heroImgLight;
  const instagramIcon = theme === 'dark' ? instagramDark : instagramLight;
  const githubIcon = theme === 'dark' ? githubDark : githubLight;
  const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile Picture" 
            />
            <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt='Color mode icon'
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Tomas
                <br />
                Arizu
             </h1>
             <h2>Frontend Developer</h2>
             <span>
                <a href="https://www.instagram.com/tomasarizu/" target='_blank'>
                <img src={instagramIcon} alt='Instagram icon'/>
                </a>
                <a href="https://www.linkedin.com/in/tomas-arizu-47ba1521a/" target='_blank'>
                <img src={linkedinIcon} alt='Linkedin icon'/>
                </a>
                <a href="https://github.com/tomasArizu13" target='_blank'>
                <img src={githubIcon} alt='Git Hub icon'/>
                </a>
             </span>
             <p className={styles.description}>
              Ever since I discovered programming, 
              it has become my passion. 
              I am particularly enthusiastic about 
              working with React, 
              as it allows me to create dynamic and 
              engaging user 
              interfaces.
             </p>
             <a href={CV} target='_blank' download>
              <button className='hover'>
                Resume
              </button>
             </a>
        </div>
    </section>
  )
}

export default Hero
