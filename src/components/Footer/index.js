import React from "react";
import "./index.css";


const Footer = () => {
  return (
    <div className="footer_container">
      <ul className="footer_list">
        <li className="footer_list_item">
          <a href="/" className="footer_list_item_link">
            Bosh sahifa
          </a>
        </li>
        <li className="footer_list_item">
          <a href="/" className="footer_list_item_link">
            Biz haqimizda
          </a>
        </li>
        <li className="footer_list_item">
          <a href="/" className="footer_list_item_link">
            Mahsulotlar
          </a>
        </li>
        <li className="footer_list_item">
          <a href="/" className="footer_list_item_link">
            Bizning hamkorlar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
