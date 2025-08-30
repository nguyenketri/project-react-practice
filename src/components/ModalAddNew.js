import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { postCreateUser } from '../services/User_Service';
const ModalAddNew = (props) =>{
  
const {show, handleClose} = props;
const [name , setName] = useState("") 
const [job , setJob] = useState("")  
   
const handleSave =  async() => {
   let res = await postCreateUser(name,job)
   console.log(res)
   if(res && res.id){
    // success
    handleClose()
    setName("")
    setJob("")
   }else{
    //error
   }
}
  
  return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
  <div className="mb-3">
    <label htmlFor="e1" className="form-label">Name</label>
    <input type="text" className="form-control" id="e1"
    value={name}
    onChange={(event) => setName(event.target.value)}
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="e2" className="form-label">Job</label>
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
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
export default ModalAddNew