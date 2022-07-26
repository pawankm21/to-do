import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './note-slice';
import expandReducer from './expand-slice';
import authReducer from './auth-slice';
export const store = configureStore({
    reducer: {
        notes: notesReducer,
        expand: expandReducer,
        auth: authReducer,
    }   
});