import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './note-slice';

export const store = configureStore({
    reducer: {
        notes: notesReducer,
    }
});