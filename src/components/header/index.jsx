import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isUserAuth = localStorage.getItem("testToken");

  const cartAmount = useSelector((state) => state.cart.cartAmount);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);

  async function getProducts(e) {
    handleOpen();
    const res = await axios.get(
      `https://newshop.herokuapp.com/api/product?filter=${e.target.value}`
    );
    setData(res.data.products);
  }

  const handleProfileClick = () => {
    if (!isUserAuth) {
      navigate("/auth/login");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="header_container">
      <ul className="header_menu_list">
        <li>
          <a href="/">Bosh sahifa</a>
        </li>
        <li>
          <a href="/all-products">Barchasi</a>
        </li>
        <li>
          <a href="/about-us">Biz haqimizda</a>
        </li>
        <li>
          <a href="/">Kiyimlar</a>
        </li>
      </ul>
      <div className="header_search">
        <input onChange={getProducts} type="text" placeholder="Qidirish" />
        {open ? (
          <div className="search_result" onMouseLeave={handleClose}>
            {data?.map((product) => {
              return (
                <div
                  className="result_card"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <img
                    className="result_img"
                    alt={product.description}
                    src={product?.image[0]}
                  />
                  <div className="result_content">
                    <h4>{product.name}</h4>
                    <span>{product.price?.toLocaleString()} so'm</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="header_profile">
        <div className="cart_container" onClick={() => navigate("/cart")}>
          <img className="cartIcon" src="/assets/cart.jpg" alt="Cart" />
          <span className="cart_badge">{cartAmount}</span>
        </div>
        <img
          onClick={handleProfileClick}
          className="header_profile_img"
          src="/assets/th.jfif"
          alt="header"
        />
        {/* <h4>Shohruzjon</h4> */}
      </div>
    </div>
  );
};

export default Header;
