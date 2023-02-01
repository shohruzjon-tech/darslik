import React from "react";
import "./index.css";
import { addToCart } from "../../redux-store/cart.slice";
import { useDispatch } from "react-redux";

const ProductCard1 = ({ product }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="pr_card_container">
      <a href={`/product/${product._id}`}>
        <img src={product?.image[0]} alt="Ushbu mahsulot test uchun qo'yildi" />
      </a>
      <div className="pr_card_content">
        <p className="pr_card_name">{product.name}</p>
        <h5 className="pr_card_stock">41 dona qoldi</h5>
        <h3 className="pr_card_price">{product.price.toLocaleString()} so'm</h3>
        <button onClick={handleCart}>SAVATCHAGA</button>
      </div>
    </div>
  );
};

export default ProductCard1;
