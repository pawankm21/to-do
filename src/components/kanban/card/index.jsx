import { ReactComponent as ProfileIcon } from "../../../assets/profile.svg";
import { motion } from "framer-motion";
import { changeNote } from "../../../store/note-slice";
import { open } from "../../../store/expand-slice";
import { useDispatch, useSelector } from "react-redux";
export default function Card({ note, noOfCards }) {
  const uid = useSelector((state) => state.auth.user.uid);
  const { title, description, createdBy, type } = note;
  const dispatch = useDispatch();
  function handleDrag(e, info) {
    switch (type) {
      case "To Do":
        if (info.offset.x > 600 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "Completed", note, uid }));
        } else if (info.offset.x > 300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "In Progress", note, uid }));
        }
        break;
      case "In Progress":
        if (info.offset.x < -300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "To Do", note, uid }));
        } else if (info.offset.x > 300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "Completed", note, uid }));
        }
        break;
      case "Completed":
        if (info.offset.x < -600 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "To Do", note, uid }));
        } else if (info.offset.x < -300 && window.visualViewport.width > 500) {
          dispatch(changeNote({ type: "In Progress", note, uid }));
        }
        break;
    }
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
        {description ? description : "Description..."}
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
