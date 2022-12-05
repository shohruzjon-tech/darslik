import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header_container">
      <ul className="header_menu_list">
        <li>
          <a href="/">Bosh sahifa</a>
        </li>
        <li>
          <a href="/new-products">Yangi mahsulotlar</a>
        </li>
        <li>
          <a href="/about-us">Biz haqimizda</a>
        </li>
        <li>
          <a href="">Kiyimlar</a>
        </li>
      </ul>
      <div className="header_search">
        <input type="text" placeholder="Qidirish" />
      </div>
      <div className="header_profile">
        <img className="header_profile_img" src="/assets/th.jfif" />
        <h4>Shohruzjon</h4>
      </div>
    </div>
  );
};

export default Header;
