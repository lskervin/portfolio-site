import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import ls from './assets/profile_pic.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header/>
        <div className="main_content1" >
          <div className="decs">
          <div style={{marginLeft: '650px', display: 'inline-block'}} class="about__headers">
            <h1 class="about__name" style={{display: 'inline-block', margin: 0}}>Leighton Skervin</h1>
            <h2 class="about__profession" style={{ marginLeft: '55px', fontSize:'smaller', paddingBottom:'10px'}}>Full Stack Web Developer.</h2>
          </div>
          <div class="profile-img" >
            <img src={ls} width="200" alt="Profile Image"/>
          </div>
          </div>
        </div>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
