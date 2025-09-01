import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { postCreateUser } from '../services/User_Service';
import { toast } from 'react-toastify';
const ModalAddNew = (props) =>{
  
const {show, handleClose, handleUpdateTable,id} = props;
const [name , setName] = useState("") 
const [job , setJob] = useState("")  
   
const handleSave =  async() => {
  
   let res = await postCreateUser(name,job,id)
      if(res){
    // success
    handleClose()
    setName("")
    setJob("")
    toast.success("User created Success")
    
    handleUpdateTable({id:String(id),first_name:name,last_name:job})
   }else{
    //error
    toast.error("Error")
   }
  //  handleUpdateTable({id:id,first_name:name,last_name:job})
  //  handleClose()
  //  setName("")
  //   setJob("")
  //  toast.success("User created Success")
}
  
  return (
     <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
     >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
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
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
export default ModalAddNew