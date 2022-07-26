import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../../store/expand-slice';
import { editNote } from '../../../store/note-slice';
export default function Expand() {
    function resizeInput(e) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { note, expand } = useSelector(state => state.expand);
    const dispatch = useDispatch();
    function handleClose(e) {
        e.stopPropagation();
        dispatch(editNote({ ...note, title, description }));
        dispatch(close());
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
        resizeInput(e);
    }
    function handleDesChange(e) {
        setDescription(e.target.value);
        resizeInput(e);
    }
    return (
        <>

            {expand ? <div
                onClick={handleClose}
                className='absolute  w-full h-full  bg-transparent bottom-0'>
                <div onClick={(e) => e.stopPropagation()} className="px-9 absolute bottom-0 z-20 right-0 w-1/2  h-full  bg-white shadow-xl pointer-events-none">
                    <textarea rows="1" onChange={handleTitleChange} className="pointer-events-auto resize-none text-lg font-medium my-[18px] overflow-hidden outline-none w-full " defaultValue={note.title} placeholder="Give your task a title" />
                    <div className="rounded-lg w-12 border-[#329C89] border bg-[#329C89]" />
                    <div className="mt-16 ">
                        <div className="w-full flex gap-10 mb-[60px]">
                            <div className="w-1/3 flex items-center text-[#6B6B6B]">Created By</div>
                            <div className="flex gap-4 items-center justify-start">
                                <img src="/profile.png" className='w-8 h-8 rounded-full border-2 border-gray-400' />{note.createdBy}</div>
                        </div>
                        <div className="w-full flex gap-10">
                            <div className="w-1/3 text-[#6B6B6B]">Description</div>
                            <textarea rows="1" onChange={handleDesChange} className="resize-none pointer-events-auto overflow-hidden outline-none w-full " defaultValue={note.description} placeholder="Description..." />
                        </div>
                    </div>
                </div>

            </div> : null}
        </>
    )
}