import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Product.css";

// http://35.76.127.20:443/api/order/add

const Product = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  async function getProduct() {
    const res = await axios.get(
      `https://newshop.herokuapp.com/api/product/${params.id}`
    );
    setData(res.data);
  }

  useEffect(() => {
    getProduct();
  }, [params.id]);

  async function addOrder(e) {
    e.preventDefault();
    try {
      const res = await axios.post("https://newshop.herokuapp.com/api/order/add", {
        city_id: 1,
        name: form.name,
        orderItems: [{ quantity: 1, productId: params.id }],
        phone: form.phone,
        userId: "",
      });
      alert(JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="Product_container">
      <div className="grid_container">
        <img src={data.image? data?.image[0] : ""} alt={data.description} />
        <div className="spr_content_container">
          <h2>{data.name}</h2>
          <form className="buy_form" onSubmit={addOrder}>
            <div className="form_input_container">
              <label htmlFor="name">Ismingizni kiriting</label>
              <input
                name="name"
                placeholder="Ism"
                className="form_input"
                id="name"
                onChange={handleInput}
              />
            </div>
            <div className="form_input_container">
              <label htmlFor="phone">Telefonraqamingizni kiriting</label>
              <input
                name="phone"
                placeholder="Telefon raqam"
                className="form_input"
                id="phone"
                onChange={handleInput}
              />
            </div>
            <div className="form_input_container">
              <button submit className="form_btn">
                BUYURTMA BERISH
              </button>
            </div>
          </form>
          <div dangerouslySetInnerHTML={{__html: data.description}}/>
        </div>
      </div>
    </div>
  );
};

export default Product;
