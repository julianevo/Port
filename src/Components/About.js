/* eslint-disable react/jsx-no-duplicate-props */
import React, {useContext} from 'react'
import tree from '../Assets/About.png'
import Cards from './Cards'
import portrait from '../Assets/Me.png'
import ThemeContext from '../Themes/ThemeContext'
import '../Style/About.css'

export default function About() {

  const theme = useContext(ThemeContext)

  return(
    <>
    <img src={tree} id = 'about' alt='tree' style={theme}></img>

    <div className='portrait'>
      <img className='pic' src={portrait} width={165} height={225} alt='portrait'></img>
    </div>

    <div className='wrap'>
      <Cards/>
    </div>

    </>
  ) 
};
   

