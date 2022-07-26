import { ReactComponent as ProfileIcon } from "../../../assets/profile.svg";
import { motion, } from "framer-motion";
import { changeNote } from "../../../store/note-slice";
import { open } from "../../../store/expand-slice";
import { useDispatch } from "react-redux";
export default function Card({ note }) {
    const { title, description, createdBy, type } = note;
    const dispatch = useDispatch();
    return (
        <motion.button
            onClick={() => {
                dispatch(open(note));
  
            }}
            onDragEnd={(e, info) => {
                ;
                if (type === "To Do") {
                    if (info.offset.x > 600) {
                        dispatch(changeNote({ type: "Completed", note }));
                    }
                    if (info.offset.x > 300) {
                        dispatch(changeNote({ type: "In Progress", note }));
                    }
                }
                if (type === "In Progress") {
                    if (info.offset.x < -300) {
                        dispatch(changeNote({ type: "To Do", note }));
                    }
                    if (info.offset.x > 300) {
                        dispatch(changeNote({ type: "Completed", note }));
                    }
                }
                if (type === "Completed") {
                    if (info.offset.x < -600) {
                        dispatch(changeNote({ type: "To Do", note }));
                    }
                    if (info.offset.x < -300) {
                        dispatch(changeNote({ type: "In Progress", note }));
                    }

                }
            }}
            dragSnapToOrigin drag layout dragMomentum={false} dragElastic={0.2} whileDrag={{
                width: "300px", position: "relative", zIndex: "100", rotate: "20deg", x: 0, y: 0,
            }}
            className="bg-white shadow rounded-lg px-[18px] py-5 w-full block text-left">
            <h1 className={`${!title ? "text-[#A4ABB3]" : null} mb-4`}>
                {title ? title : "Give your task a title"}
            </h1>
            <p className={`${!description ? "text-[#A4ABB3]" : null} min-h-[46px] `}>
                {description ? description : "Description..."}
            </p>
            <div>

            </div>
            <div>
                {!createdBy ? <ProfileIcon /> : <img src="/profile.png" className="w-[25px] h-[25px] rounded-full border border-[#E1E1E1]" />}
            </div>
        </motion.button>
    )
}