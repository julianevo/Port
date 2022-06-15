import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import '../Style/Modal.css'

const MyVerticallyCenteredModal = (props) => {

  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isCopied3, setIsCopied3] = useState(false);

  function handleEmail() {
    navigator.clipboard.writeText('@julianevo1999@gmail.com')
    setIsCopied(true)
  }

  function handleLink() {
    navigator.clipboard.writeText('https://www.linkedin.com/in/juliane-nguyen-8858a5206/')
    setIsCopied2(true)
  }

  function handlePhone() {
    navigator.clipboard.writeText('669-237-9950')
    setIsCopied3(true)
  }

  return (
    <>
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div id='line1'>  
            <h5>Email me @ julianevo1999@gmail.com</h5>
            <button onClick={handleEmail}>
            {isCopied ? <ContentPasteOutlinedIcon /> : <CopyAllIcon /> }
            </button>
          </div>
 


          <div id='line2'>
            <h5>Link up @ https://www.linkedin.com/in/juliane-nguyen-8858a5206/</h5>
            <button onClick={handleLink}>
            {isCopied2 ? <ContentPasteOutlinedIcon /> : <CopyAllIcon /> }
            </button>
          </div>
   
          
     
          <div id='line3'>
            <h5>Phone: 669-237-9950</h5> 
            <button onClick={handlePhone}>
            {isCopied3 ? <ContentPasteOutlinedIcon /> : <CopyAllIcon /> }
            </button>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <div id='line4'>
              <button>
                <a id='dl' href='Resume.pdf' download='Resume.pdf'>
                 RESUME
                </a>
              </button>
            </div>
          
        </Modal.Footer>
      </Modal>
      </>
    );
  }

const Contact = () => {

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div>
  
        <Button variant="primary" id="nav-contact" onClick={() => setModalShow(true)}>
        Contact 
        </Button>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />          
          
    </div>
  )
}

export default Contact

