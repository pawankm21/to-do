import { useRef } from 'react';
export default function Expand({ title, description, profile, isOpen, setIsOpen }) {
    const desRef = useRef();
    const titleRef = useRef();
    function resizeInput(e) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return (
        <>

            {isOpen ? <div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                }}
                className='absolute z-10 w-full h-full bg-transparent bottom-0'>
                <div className="px-9 absolute bottom-0 right-0 w-1/2  h-full  bg-white shadow-xl ">
                    <textarea rows="1" onChange={(e) => {
                        resizeInput(e);
                    }} ref={titleRef} className="resize-none text-lg font-medium my-[18px] overflow-hidden outline-none w-full " defaultValue={title} placeholder="Give your task a title" />
                    <div className="rounded-lg w-12 border-[#329C89] border bg-[#329C89]" />
                    <div className="mt-16 ">
                        <div className="w-full flex gap-10 mb-[60px]">
                            <div className="w-1/3 text-[#6B6B6B]">Created By</div>
                            <div className=""></div>
                        </div>
                        <div className="w-full flex gap-10">
                            <div className="w-1/3 text-[#6B6B6B]">Description</div>
                            <textarea rows="1" onChange={(e) => {
                                resizeInput(e);
                            }} ref={desRef} className="resize-none overflow-hidden outline-none w-full " defaultValue={description} placeholder="Description..." />
                        </div>
                    </div>
                </div>

            </div> : null}
        </>
    )
}