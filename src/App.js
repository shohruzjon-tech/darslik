import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import NewProducts from "./pages/NewProducts";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import ProfileDetails from "./pages/profile/Details";
import ProfileBuyurtmalar from "./pages/profile/Buyurtmalar";
import ProfileBalans from "./pages/profile/Balance";
import UserGame from "./pages/profile/Game";
import Market from "./pages/profile/Market";

function App() {
  return (
    <AppLayout ism="Shohruzjon">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-products" element={<NewProducts />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/auth/login" element={<AuthLogin />} />
        <Route exact path="/auth/register" element={<AuthRegister />} />
        <Route exact path="/profile" element={<ProfileDetails />} />
        <Route exact path="/profile/orders" element={<ProfileBuyurtmalar />} />
        <Route exact path="/profile/balance" element={<ProfileBalans />} />
        <Route exact path="/profile/market" element={<Market />} />
        <Route exact path="/profile/game" element={<UserGame />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
