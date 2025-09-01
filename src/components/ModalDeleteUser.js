import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { deleteUser } from '../services/User_Service';
import { toast } from 'react-toastify';
import { last } from 'lodash';
const ModalDeleteUser = (props) =>{
  
const {show,handleClose,handleDeleteForm,dataUserEdit,page} =props
  
  const handleDeleteUser = () => {
    let res = deleteUser(dataUserEdit.id,page)
    console.log("check>",res)
    if(res){
         handleClose()
    handleDeleteForm(dataUserEdit.id)
    toast.success("Delete Success")
    }else{
        toast.error("Error")
    }
    
  }
  return (
     <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
     >
        <Modal.Header closeButton>
          <Modal.Title>Delete a User {dataUserEdit.email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
 
   <h1>Are you want to delete this User</h1>
</form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
export default ModalDeleteUser