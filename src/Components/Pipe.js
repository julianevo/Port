import React from 'react'
import styled from 'styled-components'
import pipe from '../Assets/Pipe.png'
import arrow from '../Assets/Arrow.gif'
import '../Style/Projects.css'

const Contain = styled.div`
display: flex;
flex-flow: column wrap;
width:100%;
align-content: center;
cursor:pointer;
z-index:1;
`
const Pipe = () => {

    let audio = new Audio('/Super.mp3')

    const start = () => {
        audio.play();

        setTimeout(() => {
            window.scrollBy(0,1000);
        }, 800);

        window.scrollBy(0,1000)
        window.scrollBy(0,700)
      }


  return (
    <Contain onClick={start}>
        <img src={arrow} height={400} id='arrow' alt='arrow' />
        <img src={pipe}  width={400} height={500} alt='blue pipe' />
    </Contain>
  )
}

export default Pipe