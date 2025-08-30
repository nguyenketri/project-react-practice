
import Table from 'react-bootstrap/Table'
import { fetchAllUser } from '../services/User_Service'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import '../App.scss'
const TableUsers = (props) => {
   const [listUser, setListUser] = useState([])
   const [totalUser,setTotalUser] = useState(0)
   const [totalPages, setTotalPages] = useState(0)
   const [page,setPage] = useState(1);
    useEffect(() => {
    // call API
    getUser(page)
    },[page])

 const getUser =  async(page) => {
   let res = await fetchAllUser(page);
   
   if(res && res.data){
   console.log(res)
    setTotalUser(res.total)
    setListUser(res.data)
    setTotalPages(res.total_pages)
   }
   
 }

 const handlePageClick = (event) => {
 setPage(+event.selected+1)
  }
   // Customise
  return(
        <>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>first_name</th>
          <th>last_name</th>
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
    
        </>
    )
} 

export default TableUsers