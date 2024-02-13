import { Link, useNavigate } from 'react-router-dom'
import './styles/HeaderNav.css'
import { useState } from 'react'

const HeaderNav = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='header'>
        <ul className={`nav__items ${isOpen && 'open'}`}>
          <Link className='link' to='/'>
          <li className='menu__name'>
          <i className='bx bx-home'></i>
            <span>Home</span>
          </li>
          </Link>
          <Link className='link' to='/about'>
          <li className='menu__name'>
            <i className='bx bx-user'></i>
            <span>About me</span>
          </li>
          </Link>
          <Link className='link' to='/skills'>
          <li className='menu__name'>
            <i className='bx bx-code-alt' ></i>
            <span>Skills</span>
          </li>
          </Link>
          <Link className='link' to='/projects'>
          <li className='menu__name'>
            <i className='bx bxs-send' ></i>
            <span>Projects</span>
          </li>
          </Link>
          <Link className='link' to='/education'>
          <li className='menu__name'>
            <i className='bx bxs-graduation'></i>
            <span>Education</span>
          </li>
          </Link>
          <Link className='link' to='/contact'>
          <li className='menu__name'>
            <i className='bx bx-mail-send' ></i>
            <span>Contact me</span>
          </li>
          </Link>
        </ul>
        <div className='nav__logo' onClick={() => setIsOpen(!isOpen)}> <i className='bx bx-menu'></i></div>
    </div>
  )
}

export default HeaderNav