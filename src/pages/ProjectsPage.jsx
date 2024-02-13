import './styles/Projects.css'

const ProjectsPage = () => {
  return (
    <div>
      <div className="container__portafolio">
        <h2 className="portafolio__title">Projects</h2>
        <ul className="portafolio___proy">
        <div className="container__proy">
            <li className="container__total">
              <span className="portafolio__name">E-commerce</span>
              <div className="div-imagen">
                <div className="texto">
                FullStack. E-commerce web app that contains a backend where products are loaded. When making a purchase you must first create a user and log in. ▪ REACT is used for fronted programming and CSS for its design. ▪ NodeJs is used to create the backend.
                </div>
                <img className='porta__img desvanecer' src="ecommerce.PNG" alt="" />
              </div>
            </li>
            <ul className="container__icons">
              <li>
                <a href="https://github.com/valencuellar1612/E-commerce.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/valencuellar1612/e-commerce-backend.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://lustrous-sorbet-0598ca.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://e-commerce-f0b0.onrender.com" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container__proy">
            <li className="container__total">
              <span className="portafolio__name">Pokedex Page</span>
              <div className="div-imagen">
                <div className="texto">
                Web app that allows us to see the information of all the pokemons, obtained from the Pokemon API. ▪ REACT is used for its programming and CSS for its design.
                </div>
                <img className='porta__img desvanecer' src="poke.PNG" alt="" />
              </div>
            </li>
            <ul className="container__icons">
              <li>
                <a href="https://github.com/valencuellar1612/Entrega-5-React.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://pokemonpage-fddy.onrender.com" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container__proy">
            <li className="container__total">
              <span className="portafolio__name">Rick and Morty</span>
              <div className="div-imagen">
                <div className="texto">
                  Web app that allows you to see all the characters of the Rick and Morty series by location.
                   It was leaked by location using the Rick and Morty API. ▪ React is used for programming and design with CSS.
                </div>
                <img className='porta__img desvanecer' src="rick.PNG" alt="" />
              </div>
            </li>
            <ul className="container__icons">
              <li>
                <a href="https://github.com/valencuellar1612/Entrega-3-React.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://rick-and-morty-2udw.onrender.com" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container__proy">
            <li className="container__total">
              <span className="portafolio__name">Weather app</span>
              <div className="div-imagen">
                <div className="texto">
                Web app that tells you the weather depending on the location where you are. ▪ The programming was done with REACT and the design with CSS.
                </div>
                <img className='porta__img desvanecer' src="clima.PNG" alt="" />
              </div>
            </li>
            <ul className="container__icons">
              <li>
                <a href="https://github.com/valencuellar1612/Entrega-2-React.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://weather-app-ixe0.onrender.com" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* GALLETA DE LA FORTUNA  */}
          <div className="container__proy">
            <li className="container__total">
              <span className="portafolio__name">Fortune cookie</span>
              <div className="div-imagen">
                <div className="texto">
                Web application that randomly gives you a different message and background. ▪REACT is used for programming and CSS for design.
                </div>
                <img className='porta__img desvanecer' src="galleta.PNG" alt="" />
              </div>
            </li>
            <ul className="container__icons">
              <li>
                <a href="https://github.com/valencuellar1612/Entrega-1-React.git" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="github.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://galleta-de-la-fortunaok.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <img className='porta__icons' src="icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div >
  )
}

export default ProjectsPage