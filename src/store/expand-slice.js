import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    note: {},
    expand:false,
};
const expandSlice = createSlice({
    name: "expand",
    initialState,
    reducers: {
        open: (state, action) => {
            state.note=action.payload;
            state.expand = true;
        },
        close: (state) => {
            state.expand = false;
        }
    }
});
export const { open, close } = expandSlice.actions;
export default expandSlice.reducer;
