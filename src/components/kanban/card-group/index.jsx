import Card from "../card"
import { Reorder } from "framer-motion"
export default function CardGroup({ cards, setCards, handleExpand }) {
    return (<Reorder.Group as="div" className="mt-6 w-full h-fit grid gap-8 "  values={cards} onReorder={setCards}>
        {cards.map((card) => {
            console.log(card)
            return (<Reorder.Item as="div" drag={"y"} layout dragElastic={0.5} initial={{x:0,y:0}} dragConstraints={{top:100,bottom:100}}  key={card} value={card}>
                <Card />
            </Reorder.Item>)
        })}
    </Reorder.Group>)

}