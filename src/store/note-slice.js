import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        removeNote: (state, action) => {
            state.splice(action.payload, 1);
        },
        reorderNote: (state, action) => {
            state = action.payload;
        },
        editNote: (state, action) => {
            state[action.payload.index] = action.payload.note;
        }

    }
});
export const { addNote, removeNote, reorderNote, editNote } = noteSlice.actions;
export default noteSlice.reducer;