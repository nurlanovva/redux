import { Box, Button,Typography } from "@mui/material"


const CartTotal = () => {



    const handleRemoveItems = () => {
        localStorage.removeItem("cardData")
        localStorage.setItem("isItemsBought", "1")
        window.location.reload()
    }

    return(
        <Box sx={{
        border: "1px solid",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        height: "125px",
        width: "300px",
        padding: "16px 24px"
        }}>
            <Typography sx={{fontSize: "24px"}}>Оформить заказ</Typography>
            <Button onClick={handleRemoveItems} variant="contained">Заказать </Button>
        </Box>

    )
}

export default CartTotal