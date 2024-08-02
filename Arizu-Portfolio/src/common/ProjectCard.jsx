import React from 'react'

function ProjectCard({ src, link, h4, p}) {
  return (
    <a href={link} target='_blank'>
    <img className='hover' src={src} alt={`${h4} logo`} />
    <h4>{h4}</h4>
    <p>{p}</p>
    </a>
  )
}

export default ProjectCard
