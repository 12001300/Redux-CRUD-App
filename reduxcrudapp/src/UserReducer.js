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
        }

    }
})
export const {AddUser,UpdateUser}=userSlice.actions
export default userSlice.reducer