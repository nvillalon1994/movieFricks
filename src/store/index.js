import { configureStore } from '@reduxjs/toolkit'

import peliculasReducer from '../features/productos/productosSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer:{
        
        
        peliculas:peliculasReducer,
        user:userReducer
    }
})

export default store