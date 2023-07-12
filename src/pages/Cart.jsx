import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import removeFromCart from "../Store/reducer/Cart-Slice";
import Payment from "../Components/payment";
import { DisabledByDefault } from "@mui/icons-material";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [payment, setPayment] = useState(false);

  const paymentHandle = () => {
    setPayment(!payment);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToMenuPage = () => {
    navigate("/");
  };

  const removeItemHandle = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cartItems.map((cartItem, i) => (
        <div key={i}>
          <img src={cartItem.image} alt="photo" style={{ height: "35vh" }} />
          <h1> Name: {cartItem.name}</h1>
          {/* <p>Quantity: {cartItem.quantity}</p> */}

          <p>Price: {cartItem.price}</p>
          <Button
            variant="danger"
            style={{ margin: "1rem" }}
            onClick={() => removeItemHandle(cartItem.id)}
          >
            Remove Item
          </Button>
        </div>
      ))}

      <div>
        {payment ? (
          <span>
            <Payment />
          </span>
        ) : null}
        <Button style={{ margin: "1rem" }} onClick={paymentHandle}>
          Payment Now
        </Button>
      </div>
      <Button
        variant="warning"
        onClick={backToMenuPage}
        style={{ margin: "1rem" }}
      >
        ← Home
      </Button>
    </div>
  );
}

export default Cart;
