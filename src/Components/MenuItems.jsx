import { DisabledByDefault, Padding } from "@mui/icons-material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

function MenuItems({ image, name, price, menuItem, onAddToCart }) {
  const [cartItem, setCartItem] = useState(false);
  const [enterCounter, setEnterCounter] = useState(1);

  const dispatch = useDispatch();

  const addButtonHandle = () => {
    setCartItem(true);
  };

  const incrementHandle = () => {
    setEnterCounter(enterCounter + 1);
  };

  const decrimentHandler = () => {
    if (enterCounter <= 1) {
      return DisabledByDefault;
    } else {
      setEnterCounter(enterCounter - 1);
    }
  };

  const addToCartHandle = () => {
    onAddToCart({ ...menuItem, qauntity: enterCounter });
    setCartItem(false);
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>
        ${price}
        {cartItem ? (
          <>
            <Button
              onClick={incrementHandle}
              variant="primary"
              style={{ marginLeft: "2rem", Padding: "3px" }}
            >
              +
            </Button>
            {enterCounter}
            <Button onClick={decrimentHandler}>-</Button>
            <Button
              onClick={addToCartHandle}
              variant="primary"
              style={{ margin: "-4rem", marginLeft: "2rem" }}
            >
              Order
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            style={{ marginLeft: "6rem" }}
            onClick={() => addButtonHandle(menuItem)}
          >
            Add TO Cart
          </Button>
        )}
      </p>
    </div>
  );
}

export default MenuItems;
