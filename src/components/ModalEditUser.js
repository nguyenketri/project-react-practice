import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { putUpdateUser } from '../services/User_Service';
import { toast } from 'react-toastify';
import { last } from 'lodash';
const ModalEditUser = (props) =>{
  
const {show, handleClose,dataUserEdit,getUser,page,handleUpdateFrom} = props;
const [name , setName] = useState("")  
const [job , setJob] = useState("")  
   console.log(">>check pag:",page)
const handleEditUser = async() => {
  //  let res = await putUpdateUser(name,job,dataUserEdit.id,page)
  //  if(res){
  //   handleClose()
  //   getUser(page)
  //   toast.success("Update success")

  //  }
 
  handleUpdateFrom({id:dataUserEdit.id,first_name:name,last_name:job})
  handleClose()
  toast.success("Edit success")
     
}

useEffect(() => {
    if(show){
         setName(dataUserEdit.first_name)
   setJob(dataUserEdit.last_name)
    }
  
},[dataUserEdit])

  return (
     <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
     >
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