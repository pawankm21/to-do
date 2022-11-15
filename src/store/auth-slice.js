import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
// selectors
export const selectUserName=(state)=>state.auth.user.displayName;
export const selectUser=(state)=>state.auth.user;
export const selectUserId=(state)=>state.auth.user.uid;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
