import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import NewProducts from "./pages/NewProducts";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";

function App() {
  return (
    <AppLayout ism="Shohruzjon">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-products" element={<NewProducts />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
