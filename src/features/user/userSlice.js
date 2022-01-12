import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { useState } from "react"
import { auth} from "../../api"

const initialState ={
    user:{},
    logged:false,
    loading:false
}


export const login = createAsyncThunk("user/login", async (data)=>{
    const usuarios = await auth("/auth/login",data)
    return usuarios.data
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducer:{
        
        
    },
    extraReducers(builder){
        builder.addCase(login.pending,(state)=>{
            state.loading = true
        }).addCase(login.fulfilled,(state,action)=>{
            state.user = action.payload
            state.loading = false
            state.logged = true
        })
    }
})

export default userSlice.reducer