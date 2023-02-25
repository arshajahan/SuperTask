import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: [],
        pending: false,
        error: false,
    },
    reducers: { 
        fetchStart: (state) => {
            state.pending = true;
        },
        fetchSuccess: (state, action) => {
            state.pending = false;
            state.data = action.payload;
        },   
        fetchError: (state) => {
            state.pending = false;
            state.error = true;
        },        
        deleteStart: (state) => {
            state.pending = true;
        },
        deleteSuccess: (state) => {
            state.pending = false;
        },   
        deleteError: (state) => {
            state.pending = false;
            state.error = true;
        }, 
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state) => {
            state.pending = false;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        },
        addStart: (state) => {
            state.pending = true;
        },
        addSuccess: (state, action) => {
            state.pending = false;
            state.data = action.payload;
        },
        addError: (state) => {
            state.error = true;
            state.pending = false;
        },
    },
});

export const { updateStart, updateSuccess, updateError, fetchStart, fetchSuccess, fetchError,
addError, addStart, addSuccess, deleteError, deleteStart, deleteSuccess } = postsSlice.actions;
export default postsSlice.reducer;