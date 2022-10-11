
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const SingleModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     <Modal.Header closeButton>
     <h4>Sonny A77s III</h4>
     </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img style={{width : '100%0', height : '250px', objectFit : 'cover'}} src="https://static3.depositphotos.com/1007298/228/i/450/depositphotos_2284302-stock-photo-digital-slr-camera.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <h5>Sonny A77s III</h5>
            <h6> Price : $2500</h6>
            <h6>Sale Price : $2200</h6> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, sint eligendi alias ipsum voluptatum itaque qui ex sit, repellendus molestiae, corrupti voluptas magnam eum libero!</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
       Quick View
      </Button>

      <SingleModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}




export default App;
