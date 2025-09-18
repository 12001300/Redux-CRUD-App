import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice=createSlice({
    name:"user",
    initialState:userList,
    reducers:{
        AddUser:(state,action)=>{
            state.push(action.payload)
        }

    }
})
export const {AddUser}=userSlice.actions
export default userSlice.reducer