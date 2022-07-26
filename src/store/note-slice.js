import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
const initialState = {
    "To Do": {},
    "In Progress": {},
    "Completed": {}
};
const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            const type = action.payload.type;
            const user = action.payload.user;
            const id = uuidv4();
            const newNote = {
                title: "",
                description: "",
                createdBy: user,
                type,
                id,
            }
            state[type][id] = newNote;
        },
        removeNote: (state, action) => {
            delete state[action.payload.type][action.payload.id];
        },
        editNote: (state, action) => {
            const { id, type, ...rest } = action.payload;
            state[type][id] = { ...state[type][id], ...rest };
        },

        changeNote: (state, action) => {
            const note = action.payload.note;
            const type = action.payload.type;
            delete state[note.type][note.id];
            state[type][note.id] = { ...note, type };
        }

    }
});
export const { addNote, removeNote, editNote, changeNote } = noteSlice.actions;
export default noteSlice.reducer;