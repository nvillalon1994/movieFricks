import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { get } from "../../api"
import { getProducts } from "../../api/peliculas"

const initialState ={
    peliculas:[],
    loading:false
}

export const obtenerPeliculas = createAsyncThunk("peliculas", async ()=>{
    const peliculas = await getProducts()
    return peliculas
})

const peliculasSlice = createSlice({
    name:"peliculas",
    initialState,
    extraReducers(builder){
        builder.addCase(obtenerPeliculas.pending,(state)=>{
            state.loading = true
        }).addCase(obtenerPeliculas.fulfilled,(state,action)=>{
            state.peliculas = action.payload
            state.loading = false
        })
    }
})

export default peliculasSlice.reducer