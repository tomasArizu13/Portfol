import React from 'react'
import styles from './ProjectsStyles.module.css'
import tresD from '../../assets/3D.png'
import nike from '../../assets/nike.png'
import earth from '../../assets/earth.png'
import react from '../../assets/react.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard 
       src={tresD} 
       link ='https://tomasarizuportfolio.netlify.app/'
       h3 = '3D portfolio'
       p = 'Portfolio with some 3d figures with blender'
       />
       <ProjectCard 
       src={nike} 
       link ='https://github.com/tomasArizu13/Works'
       h3 = 'Nike store'
       p = 'Simulation of a online nike store'
       />
       <ProjectCard 
       src={earth} 
       link ='https://github.com/tomasArizu13/threejs/tree/main/lessons'
       h3 = 'Threejs Journey'
       p = 'All my lessons from the Threejs course by Bruno Simon'
       />
       <ProjectCard 
       src={react} 
       link ='https://github.com/GITHUBZac/final-prog'
       h3 = 'Instagram Simulation'
       p = 'App like Instagram, were you can take pictures, upload it, comment, like the post, have a profile etc'
       />
      </div>
    </section>
  )
}

export default Projects
