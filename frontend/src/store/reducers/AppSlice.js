import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode : "dark"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode : (state) => {
        if(state.mode === "light"){
            state.mode = "dark"
        }else{
            state.mode = "light"
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleMode } = themeSlice.actions

export default themeSlice.reducer