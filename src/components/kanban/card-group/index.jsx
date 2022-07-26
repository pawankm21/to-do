
import Card from "../card"
import { useState, useEffect } from "react"
import { Reorder } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { reorderNote } from "../../../store/note-slice"
export default function CardGroup({ name }) {
    const cards = useSelector(state => state.notes.filter(note => note.type === name))
    const dispatch = useDispatch()
    return (<Reorder.Group as="div" className="mt-6 w-full h-fit grid gap-8 " values={cards} onReorder={(newOrder) => {
        dispatch(reorderNote(newOrder));
        console.log(newOrder);
    }}>
        {cards.map((card) => {
            return (<Reorder.Item as="div" drag={"y"} layout dragElastic={0.5} initial={{ x: 0, y: 0 }} dragConstraints={{ top: 100, bottom: 100 }} key={card.id} value={card}>
                <Card />
            </Reorder.Item>)
        })}
    </Reorder.Group>)

}