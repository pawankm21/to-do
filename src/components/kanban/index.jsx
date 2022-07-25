import Column from "./column"
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
export default function Kanban() {
    return (
        <div className="w-full h-full bg-[#FEFEFE] px-9 py-16 ">
            <div className="grid grid-cols-3 mb-20">
                <div>
                    <div className="flex items-center gap-3.5">
                        <SearchIcon className="w-3.5 h-3.5" />
                        <input type="text" name="" placeholder="Search" className="outline-none" />
                    </div>
                </div>
                <div></div>
                <div className="flex">
                    <div></div>
                </div>
            </div>
            <h1 className="font-medium text-2xl">Projects</h1>
            <div className="grid grid-cols-3 gap-10 mt-[34px]">
                <Column name={"To Do"} />
                <Column name={"In Progress"} />
                <Column name={"Completed"} />
            </div>
        </div>
    )
}