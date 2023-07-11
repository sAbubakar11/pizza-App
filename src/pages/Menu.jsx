import React, { Fragment } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItems from "../Components/MenuItems";
import "../styles/Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/reducer/Cart-Slice";
import { productsAction } from "../Store/reducer/Product-slice";

function Menu() {
  const products = useSelector((state) => state.Product.products);

  const dispatch = useDispatch();

  const addToCartHandle = (menuItem) => {
    dispatch(cartActions.addToCart(menuItem));
  };

  dispatch(productsAction.setProducts(MenuList));
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Fragment key={key}>
              <MenuItems
                onAddToCart={() => addToCartHandle(menuItem)}
                menuItem={menuItem}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
