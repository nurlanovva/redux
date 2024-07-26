import { Box } from "@mui/material"
import Card from "../../../shared/UI/Card"


const CartFeature = () => {

    const cartData = JSON.parse(localStorage.getItem("cartData") || "")
    
    return (
        <Box  sx={{display: 'flex', gap: '24px', flexWrap: "wrap"}}>
            {cartData?.map((item: any) => (
                <Card cardData={item} inCart={true}/>
            ))
            }
        </Box>
    )
}

export default CartFeature