
function SkillList({src,skill}) {
  return (
    <span>
         <img src ={src} alt="CheckMark ico"/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList