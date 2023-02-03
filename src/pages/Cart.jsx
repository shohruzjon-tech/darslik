import "./css/cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../redux-store/cart.slice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.products);

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="cart_container">
      {cartList.map((item) => (
        <div key={item._id} className="cart_item_container">
          <div className="display_flex">
            <img src={item.image[0]} alt={item.name} width={60} height={60} />
            <div>
              <h5>{item.name}</h5>
              <h6>{item.price.toLocaleString()} so'm</h6>
            </div>
          </div>
          <div className="rightActions">
            <div className="actions">
              <button>QO'SH</button>
              <span className="action_value">{item.quantity}</span>
              <button>AYIR</button>
            </div>
            <button
              className="clear_button"
              onClick={() => handleDelete(item._id)}
            >
              O'chir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
