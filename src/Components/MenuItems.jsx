import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function MenuItems({ image, name, price, menuItem, onAddToCart }) {
  const [cartItem, setCartItem] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addButtonHandle = () => {
    setCartItem(true);
  };

  const incrementHandle = () => {
    setQuantity(quantity + 1);
  };

  const decrementHandle = () => {
    if (quantity <= 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandle = () => {
    const updatedMenuItem = { ...menuItem, quantity: quantity };
    onAddToCart(updatedMenuItem);
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
            <Button onClick={decrementHandle}>-</Button>
            {quantity}

            <Button
              onClick={incrementHandle}
              variant="primary"
              style={{ marginLeft: "2rem" }}
            >
              +
            </Button>
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
            onClick={addButtonHandle}
          >
            Add to Cart
          </Button>
        )}
      </p>
    </div>
  );
}

export default MenuItems;
