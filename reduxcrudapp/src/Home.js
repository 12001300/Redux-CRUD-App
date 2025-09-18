import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { DeleteUser } from './UserReducer'
export default function Home() {
    const dispatch=useDispatch()
    const users=useSelector(state=>state.user)
  const handleDelete=(id)=>{
    dispatch(DeleteUser({id:id}))

  }
  return (
    <div className='container'>
        <h2>CRUD App with JSON Server </h2>
        <Link to="/create" className='btn btn-success my-4'>Create + </Link>
     <table className='table'>

      <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>

        </tr>
      </thead>
      <tbody>
    {users.map((user,index)=>{return(
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                
            </td>
        </tr>
       
    )})}
      </tbody>
     </table>
    </div>
  )
}
