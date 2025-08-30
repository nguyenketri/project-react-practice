
import Table from 'react-bootstrap/Table'
import { fetchAllUser } from '../services/User_Service'
import { useEffect, useState } from 'react'
const TableUsers = (props) => {
   const [listUser, setListUser] = useState([])
    useEffect(() => {
    // call API
    getUser()
    },[])

 const getUser =  async() => {
   let res = await fetchAllUser();
   
   if(res && res.data){
     setListUser(res.data)
   }
   
 }
   // Customise
  return(
        <>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>User Name</th>
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
          <td>{item.name}</td>
          <td>{item.username}</td>
          </tr>
              )
            } )
          }
          
        
        
      </tbody>
    </Table>
        </>
    )
} 

export default TableUsers