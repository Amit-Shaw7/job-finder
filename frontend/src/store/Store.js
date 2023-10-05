import { configureStore } from '@reduxjs/toolkit'
import themeReducer  from './reducers/AppSlice'
import authReducer  from './reducers/AuthSlice'
import jobReducer  from './reducers/JobSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth : authReducer,
        job : jobReducer
    },
})