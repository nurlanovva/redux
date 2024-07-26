import { CardProps } from "../type/CardType"
import { FC } from "react"



const Card:FC<CardProps> = (props) => {

    const {cardData} = props

    const handleAddToCart = () => {
        const currentData =localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData'))] : []
        currentData?.push(cardData)
        localStorage.setItem('cartData', JSON.stringify(currentData))
    }
    return (
        <div>
            <p>{cardData.title}</p>
            <p>{cardData.id}</p>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    )
}

export default Card


// [1, 2, 3]
// push(4) => [1, 2, 3, 4]
// push(2) => [1, 3, 4]