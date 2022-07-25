import AddButton from "../add-button";

export default function Column({name}) {
    return (
        <div className="w-full  rounded-[15px] px-5 py-6 h-full bg-[#F5F9F9]">
            <div className="w-full grid grid-cols-2 py-1">
                <h2 className="text-sm justify-self-start font-medium">{name}</h2>
                <div className="text-sm rounded-lg py-1.5 px-2 text-[#329C89] bg-[#ECF3F3] font-medium justify-self-end">
                    0
                </div>
            </div>
            <AddButton/>
        </div>
    )
}