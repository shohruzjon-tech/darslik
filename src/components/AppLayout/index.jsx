import React from "react";
import Header from "../header";
import Footer from "../Footer";
import "./index.css";

const AppLayout = (props) => {
  return (
    <div className="layout_container">
      <div>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
