import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { getNotes, setNotes } from "../firebase.config";

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (uid, thunkAPI) => {
    const response = await getNotes(uid);
    console.log("Response", response);
    return response;
  }
);
export const postNotes = createAsyncThunk(
  "notes/postNotes",
  async (uid, notes, thunkAPI) => {
    await setNotes(uid, notes);
  }  
);

const initialState = {
  "To Do": {},
  "In Progress": {},
  Completed: {},
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const type = action.payload.type;
      const user = action.payload.user;
      const uid = action.payload.uid;
      const id = uuidv4();
      const newNote = {
        title: "",
        description: "",
        createdBy: user,
        type,
        id,
      };
      state[type][id] = newNote;
    },

    removeNote: (state, action) => {
      const uid = action.payload.uid;
      delete state[action.payload.type][action.payload.id];
    },
    editNote: (state, action) => {
      const { id, type, uid, ...rest } = action.payload;
      state[type][id] = { ...state[type][id], ...rest };
    },

    changeNote: (state, action) => {
      const { note, type, uid } = action.payload;
      delete state[note.type][note.id];
      state[type][note.id] = { ...note, type };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state["Completed"] = action.payload["Completed"];
      state["To Do"] = action.payload["To Do"];
      state["In Progress"] = action.payload["In Progress"];
    });
    builder.addCase(postNotes.fulfilled);
  },
});
export const { addNote, removeNote, editNote, changeNote } = noteSlice.actions;
export default noteSlice.reducer;
