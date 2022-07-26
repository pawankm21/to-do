import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './note-slice';
import expandReducer from './expand-slice';
export const store = configureStore({
    reducer: {
        notes: notesReducer,
        expand: expandReducer,
    }
});