import styled from 'styled-components'

const Pow = styled.button`
position: fixed;
top: 1.5rem;
left:8%;
transform: translate(-50%, 0);
border-radius: 47%;
background-color: transparent;
display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;

&:hover{
background-color: rgba(0, 255, 221, 0.4);
box-shadow: 0 0 8px 6px rgba(0, 255, 221, 0.2);
}`

export default Pow