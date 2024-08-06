import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CartCardProps } from "../type/CartCardType";
import { FC, useState, useEffect } from "react";

const CartCard: FC<CartCardProps> = (props) => {
  const { cardData } = props;
  const { t } = useTranslation();

  const [currentAmount, setCurrentAmount] = useState(1);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    const item = cartData.find((item) => item.id === cardData.id);
    if (item) {
      setCurrentAmount(item.amount);
    }
  }, [cardData.id]);


  const handleDeleteFromCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    const filteredCart = cartData.filter((item) => cardData.id !== item.id);
    localStorage.setItem("cartData", JSON.stringify(filteredCart));
    window.location.reload();
    localStorage.setItem("isItemDeleted", "1");
  };


  const updateLocalStorage = (amount) => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    const updatedCart = cartData.map((item) =>
      item.id === cardData.id ? { ...item, amount } : item
    );
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleIncrement = () => {
    if (currentAmount < 99) {
      const newAmount = currentAmount + 1;
      setCurrentAmount(newAmount);
      updateLocalStorage(newAmount);
    }
  };


  const handleDecrement = () => {
    if (currentAmount > 1) {
      const newAmount = currentAmount - 1;
      setCurrentAmount(newAmount);
      updateLocalStorage(newAmount);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid",
        height: "180px",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography sx={{ width: "200px", fontSize: "24px" }}>
        {cardData.title}
      </Typography>
      <Typography sx={{ fontSize: "24px" }}>
        {cardData.id * 100 * currentAmount} сом
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Button
          onClick={handleDecrement}
          sx={{ fontWeight: "bold", fontSize: "24px" }}
          variant="contained"
        >
          -
        </Button>
        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {currentAmount}
        </Typography>
        <Button
          onClick={handleIncrement}
          sx={{ fontWeight: "bold", fontSize: "24px" }}
          variant="contained"
        >
          +
        </Button>
      </Box>
      <Button onClick={handleDeleteFromCart}>{t("RemoveFromCart")}</Button>
    </Box>
  );
};

export default CartCard;

