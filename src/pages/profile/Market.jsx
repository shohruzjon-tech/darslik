import React from "react";
import "./css/market.css";
import ProfileLayout from "../../components/PrfoileLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Market = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1);

  async function getProducts(ctx) {
    const res = await axios.get(
      `https://newshop.herokuapp.com/api/product?page=${ctx}`
    );
    setData(res.data);
    setSize(res.data.countPage);
  }

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const goNext = () => {
    setPage((prevValue) => prevValue + 1);
  };

  const goBack = () => {
    setPage((prevValue) => prevValue - 1);
  };

  useEffect(() => {
    getProducts(page);
  }, [page]);

  return (
    <ProfileLayout>
      <div className="market_container">
        <div className="market_grid">
          {data?.products?.map((product) => {
            return (
              <div className="market_card">
                <img
                  className="market_card_img"
                  src={product.image[0]}
                  alt={product?.description}
                />
                <div>
                  <h5>{product.name?.slice(0, 10)}...</h5>
                  <div className="flex-container">
                    <h6>Narxi:</h6>
                    <h6>{product.price?.toLocaleString()} so'm</h6>
                  </div>
                  <div className="flex-container mb-2">
                    <h6>Foyda:</h6>
                    <h6>{product.referal_price?.toLocaleString()} so'm</h6>
                  </div>
                  <div className="flex-container border-top py">
                    <button className="market_cr">Yaraqtish</button>
                    <a href={product.postLink}>
                      <button className="market_del">Tel</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="market_pagination">
          <button
            onClick={goBack}
            disabled={page === 1}
            className={`pag_button ${page > 1 ? "active" : ""}`}
          >
            {"<<"}
          </button>
          {Array(size)
            .fill("")
            .map((data, indx) => {
              return (
                <button
                  onClick={() => handlePageChange(indx + 1)}
                  className={`pag_button ${indx + 1 === page ? "active" : ""}`}
                >
                  {indx + 1}
                </button>
              );
            })}
          <button
            onClick={goNext}
            disabled={page === size}
            className={`pag_button ${page !== size ? "active" : ""}`}
          >
            {">>"}
          </button>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Market;
