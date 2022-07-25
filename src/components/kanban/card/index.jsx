import { ReactComponent as ProfileIcon } from "../../../assets/profile.svg";
import {motion} from "framer-motion";
export default function Card({ title, description, onClick, profile }) {
    return (
        <motion.button  className="bg-white shadow rounded-lg px-[18px] py-5 w-full block text-left">
            <h1 className={`${!title ? "text-[#A4ABB3]" : null} mb-4`}>
                {title ? title : "Give your task a title"}
            </h1>
            <p className={`${!description ? "text-[#A4ABB3]" : null} min-h-[46px] `}>
                {description ? description : "Description..."}
            </p>
            <div>

            </div>
            <div>
                {!profile ? <ProfileIcon /> : <img src={profile} className="w-[25px] h-[25px] rounded-full border border-[#E1E1E1]" />}
            </div>
        </motion.button>
    )
}