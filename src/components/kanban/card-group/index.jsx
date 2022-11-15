import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { selectNotesByType,fetchNotes } from "../../../store/note-slice";
import { useEffect } from "react";
import { selectUserId } from "../../../store/auth-slice";

export default function CardGroup({ name }) {
  const dispatch=useDispatch();
  const uid=useSelector(selectUserId);
  const notes = Object.values(
    useSelector((state) => selectNotesByType(state, name))
  );
  const notesStatus=useSelector((state)=>state.notes.status);
  useEffect(()=>{
    if(notesStatus==="idle"){
      dispatch(fetchNotes(uid));
    }
  },[notesStatus,dispatch])
  return (
    <div className="mt-6 w-full grid gap-8 z-[-10] ">
      {notes.map((note) => {
        return <Card key={note.id} note={note} id={note.id} />;
      })}
    </div>
  );
}
