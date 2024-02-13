import './styles/skills.css'

const SkillsPage = () => {
  return (
    <div className='container__me'>
      <div className="container__skills">
        <h2 className="skills__title">Skills</h2>
        <ul className="skills__items">
          <li><span className="skils__name">JavaScript</span> 
            <img className='skils__img' src="javaS.png" alt="" />
          </li>
          <li><span className="skils__name">HTML</span>
            <img className='skils__img' src="html.png" alt="" />
          </li>
          <li>
            <span className="skils__name">CSS</span>
            <img className='skils__img' src="css.png" alt="" />
          </li>
          <li><span className="skils__name">REACT</span>
            <img className='skils__img' src="react.png" alt="" />
          </li>
          <li><span className="skils__name">TypeScript</span>
            <img className='skils__img' src="typeS.png" alt="" />
          </li>
          <li><span className="skils__name">NodeJs</span>
            <img className='skils__img' src="nodeJs1.png" alt="" />
          </li>
          <li><span className="skils__name">PostgreSQL</span>
            <img className='skils__img' src="postgres1.png" alt="" />
          </li>
        </ul>
      </div>
      <ul className='container__soft'>
      <h2 className="skills__title">Soft Skills</h2>
        <li className="skils__name">
          <i className='bx bx-check-shield'></i><span>Adaptability</span>
        </li>
        <li className="skils__name">
          <i className='bx bx-check-shield'></i>
          <span>Effective communication</span>
        </li>
        <li className="skils__name">
          <i className='bx bx-check-shield'></i>
          <span>Teamwork</span>
        </li>
        <li className="skils__name">
          <i className='bx bx-check-shield'></i>
          <span>Problem resolution</span>
        </li>
      </ul>
    </div>
  )
}

export default SkillsPage