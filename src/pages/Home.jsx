import React, { useEffect, useState } from "react";
import ProductCard1 from "../components/ProductCards";
import "./css/Home.css";
import axios from "axios";

// https://uzstoredev.herokuapp.com/api/product?page=1

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1);

  async function getProducts(p) {
    const res = await axios.get(
      `https://newshop.herokuapp.com/api/product?page=${p}`
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
    <>
      <div className="home_container">
        {data?.products?.map((res) => {
          return <ProductCard1 key={res?._id} product={res} />;
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
                key={indx}
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
    </>
  );
}

export default Home;
