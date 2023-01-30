import React from "react";
import "./css/NewProducts.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const NewProducts = () => {
  const [data, setData] = useState();
  const getList = async () => {
    const res = await axios.get(
      "https://newshop.herokuapp.com/api/product/all"
    );
    setData(res.data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="newProducts_container">
      <h2>Barch mahsulotlar</h2>
      <div className="prod_grid_container">
        {data?.map((pr) => (
          <a href={`/product/${pr._id}`}>
            <div className="prod_container" key={pr._id}>
              <img src={pr?.image[0]} alt="" className="prod_image" />
              <div className="pr_overlay">
                <span className="pr_price">
                  {pr?.price?.toLocaleString()} so'm
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
