import Column from "./column";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import Expand from "./expand";
import { useSelector } from "react-redux";
import Settings from "./settings";
import { selectUserName } from "../../store/auth-slice";
import { isExpand } from "../../store/expand-slice";
export default function Kanban() {
  const user = useSelector(selectUserName);
  const expand = useSelector(isExpand);
  return (
    <div className="relative overflow-x-hidden w-full bg-[#FEFEFE] px-9 pt-16">
      <div className="grid grid-cols-3 mb-20 ">
        <div className="col-span-2">
          <div className="flex items-center gap-3.5">
            <SearchIcon className="w-3.5 h-3.5" />
            <textarea
              rows={1}
              type="text"
              name=""
              placeholder="Search"
              className="resize-none outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-self-end items-center justify-end w-full">
          <h3>Hi {user || "Anonymous"}</h3>
          <Settings />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <h1 className="font-medium text-2xl">Notes</h1>
        <div className="justify-self-end flex gap-3 items-center">
          <FilterIcon />
          <p className="text-[17px]">Filter</p>
        </div>
      </div>
      <div
        className="lg:grid lg:grid-cols-3 flex-row gap-10 mt-[34px]"
        id="expand-container"
      >
        <Column name={"To Do"} />
        <Column name={"In Progress"} />
        <Column name={"Completed"} />
        {expand ? <Expand /> : null}
      </div>
    </div>
  );
}
