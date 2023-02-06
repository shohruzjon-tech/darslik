import "./css/cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  increaseCart,
  decreaseCart,
} from "../redux-store/cart.slice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.products);

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseCart(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseCart(id));
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
              <button
                onClick={() => handleIncrease(item._id)}
                disabled={item.quantity === 10}
              >
                QO'SH
              </button>
              <span className="action_value">{item.quantity}</span>
              <button
                onClick={() => handleDecrease(item._id)}
                disabled={item.quantity === 1}
              >
                AYIR
              </button>
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
      <div className="cart_order_form">
        <h2 className="form_header">BUYURTMA BERISH UCHUN</h2>
        <div className="input_container">
          <label htmlFor="">Telefon raqam</label>
          <input placeholder="Telefon raqam"/>
        </div>
        <div className="input_container">
          <label htmlFor="">Ism va familiya</label>
          <input placeholder="Ism"/>
        </div>
        <div className="form_btn_container">
          <button className="btn">BUYURTMA BERISH</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
