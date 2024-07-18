function SkillList({src, skill}) {
  return (
    <span>
    <img src={src} alt="CheckmarkIcon" />
    <p>{skill}</p>
    </span>
  )
}

export default SkillList
