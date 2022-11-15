import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    note:{},
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
            state.note={};
        }
    }
});
//selectors
export const isExpand=state=>state.expand.expand;
export const selectExpandedNote=state=>state.expand.note;
export const { open, close } = expandSlice.actions;
export default expandSlice.reducer;
