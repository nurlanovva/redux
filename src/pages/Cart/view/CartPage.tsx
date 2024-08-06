import { useEffect } from "react";
import CartFeature from "../../../features/Cart";
import Container from "../../../shared/UI/Container";
import { toast } from "react-toastify";

const CartPage = () => {

    const notifyDelete = () => toast.error("Удалено из корзины");

    const notifyBought = () => toast("Покупка завершена")

    useEffect(() => {
        const alert = localStorage.getItem("isItemDeleted") 
        const bought = localStorage.getItem("isItemsBought")    
        if(alert && +alert){
            notifyDelete()
            setTimeout(() => localStorage.setItem("isItemDeleted", "0"), 0)
        }
        if(bought && +bought){
            notifyBought()
            setTimeout(() => localStorage.setItem("isItemsDeleted", "0"), 0)
        }
    }, [])

    return (
        <Container>
            <CartFeature />
        </Container>
    )
}


export default CartPage