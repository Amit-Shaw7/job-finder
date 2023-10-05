import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: null,
    jobApplied: null,
    loading : false
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload
        },
        jobApplied: (state, action) => {
            state.jobApplied = action.payload;
        },
        startLoader : (state) => {
            state.loading = true;
        },
        stopLoader : (state) => {
            state.loading = false;
        },
        clearJobApplied : (state) => {
            state.jobApplied = null
        }

    },
})

// Action creators are generated for each case reducer function
export const { setJobs , jobApplied , startLoader , stopLoader , clearJobApplied} = jobSlice.actions

export default jobSlice.reducer