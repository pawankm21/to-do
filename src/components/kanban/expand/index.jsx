import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../../../store/expand-slice";
import { editNote, postNotes } from "../../../store/note-slice";
export default function Expand() {
  const { note, expand } = useSelector((state) => state.expand);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const uid = useSelector((state) => state.auth.user.uid);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const desRef = useRef(null);
  async function handleClose(e) {
    e.stopPropagation();
    dispatch(editNote({ ...note, title, description, uid }));
    dispatch(close());
    await dispatch(postNotes({ notes, uid })).unwrap();
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDesChange(e) {
    setDescription(e.target.value);
  }
  useEffect(() => {
    if (desRef.current) {
      desRef.current.style.height = desRef.current.scrollHeight + "px";
    }
  }, [description, expand]);
  return (
    <>
      {expand ? (
        <div
          className="absolute min-w-full min-h-full bg-transparent flex top-0"
          id="expand"
        >
          <div
            className="absolute w-screen h-screen bg-transparent"
            onClick={handleClose}
          />
          <div className="px-9 absolute top-0  right-0 w-1/2   h-screen  bg-white shadow-xl overflow-y-scroll z-10 ">
            <input
              onChange={handleTitleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              className="pointer-events-auto resize-none text-lg font-medium my-[18px] overflow-hidden outline-none w-full rounded  focus:ring ring-green-400 placeholder:-mx-4 p-2"
              defaultValue={note.title}
              placeholder="Give your task a title"
            />
            <div className="rounded-lg w-12 border-[#329C89] border bg-[#329C89]" />
            <div className="py-8">
              <div className="w-full flex items-center gap-4 pb-8">
                <div className=" text-[#6B6B6B]">Created By</div>
                <div className="flex gap-4">
                  <img
                    src="/avatar.webp"
                    className="w-6 h-6 rounded-full border-2 border-gray-400"
                  />
                  {note.createdBy}
                </div>
              </div>
              <div className="w-full">
                <textarea
                  className="pointer-events-auto text-lg font-medium my-[18px] outline-none w-full resize-y rounded  focus:ring ring-green-400 placeholder:-mx-4 p-2 h-full overflow-hidden"
                  onChange={handleDesChange}
                  placeholder="...Add notes"
                  defaultValue={note.description}
                  ref={desRef}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
