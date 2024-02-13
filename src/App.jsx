import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderNav from './share/HeaderNav'
import HomePages from './pages/HomePages'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  },[theme]);

  return (
    // <div className='container'>
    <div className={`App ${theme}`} >
      <HeaderNav />
      <button className='btn__dark' onClick={toggleTheme}><i className='bx bx-brightness-half'></i></button>
      <Routes>
        <Route path='/' element={<HomePages/>} />
        <Route path='/about' element={<AboutMePage/>} />
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/education' element={<EducationPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
        <a href="https://wa.me/+573175268757?" target="_blank" rel="noopener noreferrer">
          <img className='imag' src="whatspop.png" alt="" />
        </a>
    </div>
  )
}

export default App
