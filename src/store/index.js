import { configureStore } from '@reduxjs/toolkit'

import peliculasReducer from '../features/peliculas/peliculasSlice'


const store = configureStore({
    reducer:{
        
        
        peliculas:peliculasReducer,
        
    }
})

export default store