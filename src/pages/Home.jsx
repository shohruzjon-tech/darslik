import React, { useEffect, useState } from "react";
import ProductCard1 from "../components/ProductCards";
import "./css/Home.css";
import axios from "axios";

// https://uzstoredev.herokuapp.com/api/product?page=1

function Home() {
  const [data, setData] = useState([]);

  async function getProducts() {
    const res = await axios.get(
      "http://35.76.127.20:443/api/product?page=1"
    );
    setData(res.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(data);

  return (
    <div className="home_container">
      {data.map((res) => {
       return <ProductCard1 product={res} />;
      })}
    </div>
  );
}

export default Home;
