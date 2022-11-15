import { ReactComponent as ProfileIcon } from "../../../assets/profile.svg";
import { motion } from "framer-motion";
import {
  changeNote,
  postNotes,
  selectAllNotes,
} from "../../../store/note-slice";
import { open } from "../../../store/expand-slice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../store/auth-slice";
export default function Card({ note }) {
  const { title, description, createdBy, type } = note;
  const notes = useSelector(selectAllNotes);
  const uid = useSelector(selectUserId);
  const dispatch = useDispatch();
  async function handleDrag(e, info) {
    switch (type) {
      case "To Do":
        if (info.offset.x > 600 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "Completed", note }));
        } else if (info.offset.x > 300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "In Progress", note }));
        }
        break;
      case "In Progress":
        if (info.offset.x < -300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "To Do", note }));
        } else if (info.offset.x > 300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "Completed", note }));
        }
        break;
      case "Completed":
        if (info.offset.x < -600 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "To Do", note }));
        } else if (info.offset.x < -300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "In Progress", note }));
        }
        break;
    }
    // await dispatch(postNotes({ notes, uid })).unwrap();
  }
  return (
    <motion.button
      onClick={() => {
        dispatch(open(note));
      }}
      onDragEnd={handleDrag}
      dragSnapToOrigin
      drag
      layout
      dragMomentum={false}
      dragElastic={0.2}
      whileDrag={{
        position: "relative",
        zIndex: "100",
        rotate: "20deg",
        x: 0,
        y: 0,
      }}
      className="bg-white shadow rounded-lg px-[18px] py-5 w-full block text-left"
    >
      <h1 className={`${!title ? "text-[#A4ABB3]" : null} mb-4`}>
        {title ? title : "Give your task a title"}
      </h1>
      <p className={`${!description ? "text-[#A4ABB3]" : null} min-h-[46px] `}>
        {description
          ? `${description.substring(0, 20)} ${
              description.length > 20 ? "..." : ""
            }`
          : "Description..."}
      </p>
      <div></div>
      <div>
        {!createdBy ? (
          <ProfileIcon />
        ) : (
          <img
            src="/avatar.webp"
            className="w-[25px] h-[25px] rounded-full border border-[#E1E1E1]"
          />
        )}
      </div>
    </motion.button>
  );
}
