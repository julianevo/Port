import './App.css';
import React, {useState} from 'react'
import { Route, Routes } from 
"react-router-dom";
import ThemeContext, {themes} from './Themes/ThemeContext'
import Nav from './Components/Nav';
import Power from './Components/Power';
import Landing from './Components/Landing'
import Projects from './Components/Projects';
import About from './Components/About';
import Message from './Components/Message';
import Credit from './Components/Credit';
import Figma from './Components/Subroutes/Figma'


function Application() {

  const [theme,setTheme] = useState(themes.dark)

  const toggleTheme = () => theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)

  return (
    <ThemeContext.Provider value={theme}>
      <div onClick={toggleTheme}>
      <Power />
      </div>
      <Nav />
      <Routes>
        <Route path ='/' element = {<Landing/>}/>
        <Route path ='/projects' element = {<Projects/>}/>
        <Route path = '/about' element = {<About/>}/>
        {/* <Route path = '/html' element = {<Html/>}/>
        <Route path = '/css' element = {<Css/>}/>
        <Route path = '/js' element = {<JS/>}/> */}
        <Route path = '/figma' element = {<Figma/>}/>
        {/* <Route path = '/sketch' element = {<Sketch/>}/>
        <Route path = '/invision' element = {<Invision/>}/>
        <Route path = '/ps' element = {<PS/>}/>
        <Route path = '/react' element = {<React/>}/>
        <Route path = '/digital' element = {<Digital/>}/> */}
      </Routes>
      <Message />
      <Credit />
    </ThemeContext.Provider>
  
  );
}

export default Application;
