import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { putEditUser } from '../services/User_Service';
import { toast } from 'react-toastify';
const ModalEditUser = (props) =>{
  
const {show, handleClose,dataUserEdit} = props;
const [name , setName] = useState("") 
const [job , setJob] = useState("")  
   
const handleEditUser = () => {
//    let res = putEditUser()
}

useEffect(() => {
    if(show){
         setName(dataUserEdit.first_name)
   setJob(dataUserEdit.last_name)
    }
  
},[dataUserEdit])

  return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
  <div className="mb-3">
    <label htmlFor="e1" className="form-label">First Name</label>
    <input type="text" className="form-control" id="e1"
    value={name}
    onChange={(event) => setName(event.target.value)}
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="e2" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="e2"
     value={job}
    onChange={(event) => setJob(event.target.value)}
    />
  </div>

</form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
export default ModalEditUser