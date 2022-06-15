import React,{ useState,useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import '../Style/Projects.css'
import ThemeContext from '../Themes/ThemeContext'
import Pipe from '../Components/Pipe'
import { Modal, Button } from 'antd';
import { ProjectsData } from '../Data/Frontend'
import { DesignData } from '../Data/Design';



const Project = () => {

  const theme = useContext(ThemeContext)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalData, setModalData] = useState([])

  const showModal = () => {
      setIsModalVisible(true)
  }
  const handleOk = () => {
      setIsModalVisible(false)
  }
  const handleCancel = () => {
      setIsModalVisible(false)
  }

return (
  
  <>

  <div className='main-title' style={theme}>

    <h1 id='front-end' style={theme} >Front-end</h1>

      <div className = 'container' style={theme}>

        {ProjectsData.map(project => ( 

          <div className='projects' style={theme}>

          <div className='frontend'>
              <p style={theme} className='title'>{project.title}</p>
                {/* <img className='bg-images' src={project.image} alt='hrf'/> */}
                  <div className='hashtags'>
                    <p style={theme}>{project.hashtags}</p>
                  </div>

                  <Button type="primary" onClick={() => {
                    setModalData(project)
                    showModal()
                    }}>
                    More Details
                  </Button>

                  <Modal title={modalData.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <p>Description: {modalData.description}</p>
                      <p>Role: {modalData.role}</p>
                      <p>Contribution: {modalData.duties}</p>
                      <p><a target="_blank" rel="noopener noreferrer" href={modalData.github}>Visit Site</a></p>
                  </Modal>
          </div>
          </div>
          ))}
      </div>
  
      <div className='pipe'>
        <Pipe/>
      </div>

      <h1 id='design' style={theme}>UX/UI</h1>

      <div className = 'container2' style={theme}>

      {DesignData.map(project => ( 

      <div className='projects' style={theme}>

      <div className='frontend'>
        <p style={theme} className='title'>{project.title}</p>
          <div className='hashtags'>
            <p style={theme}>{project.hashtags}</p>
          </div>

          <Button type="primary" onClick={() => {
            setModalData(project)
            showModal()
            }}>
            More Details
          </Button>

          <Modal title={modalData.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Description: {modalData.description}</p>
              <p>Contribution: {modalData.duties}</p>
              <p><a target="_blank" rel="noopener noreferrer" href={modalData.github}>Visit Site</a></p>
          </Modal>

        </div>
      </div>
    ))}
  </div>
</div>

  </>

  )}


export default Project



 
 
  

     

    
  
  
 