import Card from "../card";
import { useSelector } from "react-redux";

export default function CardGroup({ name }) {
  const notes = useSelector((state) => Object.values(state.notes[name]));
  const noOfCards = useSelector(
    (state) => Object.keys(state.notes[name]).length
  );
  return (
    <div className="mt-6 w-full grid gap-8 z-[-10] ">
      {notes.map((note) => {
        return <Card key={note.id} noOfCards={noOfCards} note={note} />;
      })}
    </div>
  );
}
