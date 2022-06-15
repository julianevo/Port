/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import SoundBar from './Soundbar'
import '../Style/Nav.css'

export default function Nav() {


    return (
      
        <div className='nav-container'>
          
            <nav>
                <div className='logo' >
                    <h1>JULIANE VO's PORTFOLIO</h1>
                </div>
                 
                <div className = 'links'>
                <a>
                    <Link to = '/' style={{textDecoration: 'none'}}>Home</Link>
                </a>
                <a>
                    <Link to = '/projects' style={{textDecoration: 'none'}}>Projects</Link>
                </a>
                <a>
                    <Link to = '/about'style={{textDecoration: 'none'}}>About</Link>
                </a>

                <Contact />

                <SoundBar />
                
                </div>  
            </nav>
         </div>     
    )
}


