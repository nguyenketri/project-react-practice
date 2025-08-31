
import Table from 'react-bootstrap/Table'
import { fetchAllUser } from '../services/User_Service'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import '../App.scss'
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser'
import { toast } from 'react-toastify'
import { deleteUser } from '../services/User_Service'
const TableUsers = (props) => {
   const [listUser, setListUser] = useState([])
   const [totalUser,setTotalUser] = useState(12)
   const [totalPages, setTotalPages] = useState(2)
   const [page,setPage] = useState(1);

   const [show, setShow]= useState(false)
   const [showEdit, setShowEdit]= useState(false)
   const [dataUserEdit,setDataUserEdit] = useState({})
    useEffect(() => {
    // call API
    getUser(page)
    },[page])

 const getUser =  async(page) => {
   let res = await fetchAllUser(page);
   
   if(res && res.data){
    setListUser(res.data)
   }
   
 }

 const handlePageClick = (event) => {
  
 setPage(+event.selected+1)
  }
   // Customise

    
  const handleShow = () => {
    setShow(true)
  }

  const handleUpdateTable = (user) => {
    //  getUser(page)
    setListUser([...listUser,user])
  }

  const hadleEditUser = (user) => {
   setDataUserEdit(user)
   setShowEdit(true)
  }

  const handleDelete =  async(item) => {
  
  let res = window.confirm("are you want to delete")
   if(res){
   
    await deleteUser(item.id,page)
    await getUser(page)
    toast.success("Delete Success")
   }else{
    toast.info("Delete Cancelled")
   }
  ;
  
  }
  return(
        <>
        <div className='my-3 add-new'>
          <span><b>List User:</b></span>
          <button className='btn btn-success' onClick={handleShow}>Add new User</button>
        </div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
          {
            listUser && listUser.length > 0 &&
            listUser.map((item,index) => {
              return(
                <tr key={`user-${index}`}>
                <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>
            <button 
            onClick={() => hadleEditUser(item)}
            className='btn btn-warning mx-3'> Edit</button>
            <button 
            onClick={() => handleDelete(item)}
            className='btn btn-danger '>Delete</button>
          </td>
          </tr>
              )
            } )
          }
          
        
        
      </tbody>
    </Table>
     <div className='pagination-center'>
     <ReactPaginate 
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-ỉtem'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
       
      /></div>
       <ModalAddNew show={show}
      handleClose = {() => setShow(false)}
      handleUpdateTable={handleUpdateTable}
      id={listUser.length+1}
      page={page}
     />
     <ModalEditUser
     show={showEdit}
     handleClose={()=>setShowEdit(false)}
     dataUserEdit={dataUserEdit}
     getUser={getUser}
     page={page}
     />
     
        </>
    )
} 

export default TableUsers