import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        logoutSuccess: (state) => {
            state.user = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginSuccess , logoutSuccess } = authSlice.actions

export default authSlice.reducer