import Column from "./column"
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import {useState} from "react";
import Expand from "./expand";
export default function Kanban() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);
    function handleExpand(card) {
        setExpandedCard(card);
        setIsExpanded(true);
    }
    return (
        <div className="w-full h-fit bg-[#FEFEFE] px-9 pt-16 overflow-x-hidden ">

            <div className="grid grid-cols-3 mb-20 ">
                <div>
                    <div className="flex items-center gap-3.5">
                        <SearchIcon className="w-3.5 h-3.5" />
                        <textarea rows={1} type="text" name="" placeholder="Search" className="resize-none outline-none" />
                    </div>
                </div>
                <div></div>
            </div>
            <div className="grid grid-cols-2">
                <h1 className="font-medium text-2xl">Projects</h1>
                <div className="justify-self-end flex gap-3 items-center">
                    <FilterIcon />
                    <p className="text-[17px]">Filter</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-[34px] relative min-h-[100vh]">
                <Expand setIsOpen={setIsExpanded} isOpen={isExpanded} />
                <Column name={"To Do"}  />
                <Column name={"In Progress"} />
                <Column name={"Completed"} />
            </div>
        </div>
    )
}