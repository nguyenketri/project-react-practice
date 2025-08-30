import { useState } from 'react';
import './App.scss';
import Header from './components/Header'
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
function App() {
   const [show, setShow]= useState(false)
  const handleShow = () => {
    setShow(true)
  }
  
  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <div className='my-3 add-new'>
          <span><b>List User:</b></span>
          <button className='btn btn-success' onClick={handleShow}>Add new User</button>
        </div>
         <TableUsers/>
      </Container>
     
     <ModalAddNew show={show}
      handleClose = {() => setShow(false)}
     />
    </div>
  );
}

export default App;
