import { CardProps } from "../type/CardType"
import { FC } from "react"
import { Button, Typography, Box } from "@mui/material"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Card:FC<CardProps> = (props) => {

    const {cardData, inCart} = props

    const notify = () => toast.success("Добавленно в корзину");
    const notifyDelete = () => toast.error("Удалено из корзины");

    const handleAddToCart = () => {
        const currentData =localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData')  || "")] : []
        currentData?.push(cardData)
        localStorage.setItem('cartData', JSON.stringify(currentData))
        notify()
    }
    
    const handleDeleteFromCard = () => {
        const currentData =localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData')  || "")] : []
        const filtredCart = currentData.filter((item) => (cardData.id !== item.id))
        localStorage.setItem('cartData', JSON.stringify(filtredCart))
        notifyDelete()
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            justifyContent: "space-between",
            border: '1px solid',
            borderRadius: '8px',
            padding: '8px 16px'
        }}>
            <Typography>{cardData.title}</Typography>
            <Typography>{cardData.id}</Typography>
            {inCart ? 
                <Button onClick={handleDeleteFromCard}>Удалить из корзины</Button> : 
                <Button variant="contained" onClick={handleAddToCart}>Добавить в корзину</Button>
            }
        </Box>
    )
}

export default Card