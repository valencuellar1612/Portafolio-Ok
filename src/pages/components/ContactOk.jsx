
const ContactOk = () => {
  return (
    <div className="container__contacto">
        <h2 className="contacto__title">Contact Me</h2>
        <ul className="contacto__info">
          <li className="contacto__icons">
          <a href="https://www.linkedin.com/in/valentina-cuellar-martinez-a9bb54120" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="" />
          </a>
          </li>
          <li className="contacto__icons">
          <a href="https://github.com/valencuellar1612" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="" />
          </a>
          </li>
          <li className="contacto__image" ><img className="contacto__icons" src="mail.png" /><p className="contacto__tex">valencuellar1612@gmail.com</p>
          </li>
        </ul>
      </div>
  )
}

export default ContactOk