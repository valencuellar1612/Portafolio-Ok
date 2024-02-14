import './styles/HomePage.css'

const HomePages = () => {
  return (
    <div className="container__home">
      <h1 className=" t-stroke t-shadow home__name" >Valentina Cuellar Martinez</h1>
      <h2 className="home__title">Full-Stack Web Developer </h2>
      <h3 className="home__pa">Working together we will make your projects go very far</h3>
      <div className='container__icons'>
        <button className="home__icons">
          <a href="https://www.linkedin.com/in/valentina-cuellar-martinez-a9bb54120" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="" />
          </a>
        </button>
        <button className="home__icons">
          <a href="https://github.com/valencuellar1612" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="" />
          </a>
        </button>
        <button className="home__icons">
          <a href="https://wa.me/+573175268757?" target="_blank" rel="noopener noreferrer">
            <img src="whats.png" alt="" />
          </a>
        </button>
      </div>
      <button className='home__hv'>
          <a href="https://drive.google.com/file/d/1w0l6WUA4nKWf3D218KQJPNKMarD_yqh1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span>Download my HV</span>
          </a>
        </button>
    </div>
  )
}

export default HomePages