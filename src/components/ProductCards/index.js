import React from "react";
import "./index.css";

const ProductCard1 = ({ product }) => {
  return (
    <a href={`/product/${product._id}`}>
      <div className="pr_card_container">
        <img src={product?.image} alt="Ushbu mahsulot test uchun qo'yildi" />
        <div className="pr_card_content">
          <p className="pr_card_name">{product.name}</p>
          <h5 className="pr_card_stock">41 dona qoldi</h5>
          <h3 className="pr_card_price">
            {product.price.toLocaleString()} so'm
          </h3>
        </div>
      </div>
    </a>
  );
};

export default ProductCard1;
