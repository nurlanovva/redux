import { Box } from "@mui/material"
import { CartItems } from "../type/CartFeatureType"
import CartCard from "../../../shared/UI/CartCard"
import CartTotal from "../../../shared/CartTotal"

const CartFeature = () => {

    const cartData: CartItems[] | [] = JSON.parse(localStorage.getItem("cartData") || "[]")
    
    return (
        <Box sx={{display: "flex", gap: "20px", width: "100%"}}>
        <Box sx={{display: "flex", flexDirection: "column", gap: "10px", width: "100%"}}>
            {cartData?.map((item) => (
                <CartCard key={item.id} cardData={item}/>
            ))
            }
            </Box>
            <CartTotal />
        </Box>
    )
}

export default CartFeature