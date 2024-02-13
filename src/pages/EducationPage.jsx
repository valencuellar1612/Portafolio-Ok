import './styles/Education.css'

const EducationPage = () => {
  return (
      <div className="container__educacion">
        <h2 className="educacion__title">Education</h2>
        <ul className="educacion__cont">
          <li className="educacion1">
              <img className='educacion__logo' src="academlo.png" alt="" />
              <h4 className="educacion__name" >Academlo School of Technology and computer science</h4>
              <p className="educacion__text">Devloper Web Full Stack</p>
          </li>
          <li className="educacion1">
              <img className='educacion__logo1' src="caldas.png" alt="" />
              <h4 className="educacion__name" >Universidad de Caldas</h4>
              <p className="educacion__text">Mechatronics Engineering</p>
          </li>
        </ul>
      </div>
  )
}

export default EducationPage