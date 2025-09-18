import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice=createSlice({
    name:"user",
    initialState:userList,
    reducers:{
        AddUser:(state,action)=>{
            state.push(action.payload)
        }
        ,UpdateUser:(state,action)=>{
            const {id,name,email}=action.payload; 
            const uu =state.find(user=>user.id==id);
            if (uu){
                uu.name=name
                uu.email=email
            }
        },
        DeleteUser:(state,action)=>{
           const {id}=action.payload
           const uu =state.find(f=>f.id==id)
           if(uu){
           return state.filter(f=> f.id!=id)
           }

        }

    }
})
export const {AddUser,UpdateUser,DeleteUser}=userSlice.actions
export default userSlice.reducer