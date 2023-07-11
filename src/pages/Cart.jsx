import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../Store/reducer/Cart-Slice";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backTOMenuPage = () => {
    navigate("/");
  };

  const removeItemHandle = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div>
      {cartItems.map((cartItem, i) => (
        <div key={i}>
          <img src={cartItem.image} alt="photo" style={{ height: "35vh" }} />
          {/* <div style={{ backgroundImage: `url(${cartItem.image})` }}></div> */}
          <h1> Name:{cartItem.name}</h1>
          <p>{cartItem.qauntity}X</p>
          <p> Price: {cartItem.price}</p>
          <Button
            variant="danger"
            onClick={() => removeItemHandle(cartItem.id)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button variant="warning" onClick={backTOMenuPage}>
        ← Home
      </Button>
    </div>
  );
}

export default Cart;
