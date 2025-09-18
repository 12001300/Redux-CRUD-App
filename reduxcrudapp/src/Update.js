import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { UpdateUser } from './UserReducer'

export default function Update() {
    const users=useSelector(state=>state.user)
    const {id}=useParams()
    const existingUser=users.filter(user=> user.id==id);

    const {name,email}=existingUser[0]
    const[uname,setName]=useState(name)
        const[uemail,setEmail]=useState(email)
        const navigate=useNavigate()
        const dispatch=useDispatch()
        const handelUpdate=(e)=>{
            e.preventDefault()
            dispatch(UpdateUser({
                id:id,
                name:uname,
                email:uemail
            }))
            navigate("/")
        }
  return (
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3 >Update User</h3>
    <form onSubmit={handelUpdate}>
        <div>
            <label htmlFor='name'> Name: </label>
            <input type='text' name='name' className='form-control' placeholder='enter name' value={uname} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor='email'> Email: </label>
            <input type='email' name='email' className='form-control' placeholder='enter email' value={uemail} onChange={(e)=>setEmail(e.target.value)}  />
        </div><br/>
        <button className='btn btn-info'>Update</button>
    </form>

      </div>
    </div>
  )
}
