import { ReactComponent as PlusIcon } from "../../../assets/plus.svg";
import { useDispatch,useSelector } from "react-redux";
import { addNote } from "../../../store/note-slice";
export default function AddButton({ name }) {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(addNote({type:name,user:user.displayName,uid:user.uid}));
    }
    return (

        <button onClick={handleClick} className="w-full mt-5 bg-[#ECF3F3] rounded-lg flex justify-center">
            <PlusIcon className="my-3" />
        </button>

    )
}