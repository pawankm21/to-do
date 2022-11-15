import Card from "../card";
import { useSelector } from "react-redux";
import { selectNotesByType } from "../../../store/note-slice";

export default function CardGroup({ name }) {
  const notes = useSelector((state) => selectNotesByType(state, name));
  return (
    <div className="mt-6 w-full grid gap-8 z-[-10] ">
      {notes.map((note) => {
        return <Card key={note.id} note={note} />;
      })}
    </div>
  );
}
