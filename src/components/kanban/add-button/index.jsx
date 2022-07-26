import { ReactComponent as PlusIcon } from "../../../assets/plus.svg";
import { useDispatch } from "react-redux";
import { addNote } from "../../../store/note-slice";
import { v4 as uuidv4 } from "uuid";
export default function AddButton({ name }) {

    const dispatch = useDispatch();
    function handleClick() {
        dispatch(addNote({
            title: "",
            description: "",
            createdBy: "",
            type: name,
            id: uuidv4()
        }));
    }
    return (

        <button onClick={handleClick} className="w-full mt-5 bg-[#ECF3F3] rounded-lg flex justify-center">
            <PlusIcon className="my-3" />
        </button>

    )
}