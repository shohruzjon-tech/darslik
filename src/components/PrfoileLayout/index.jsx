import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const ProfileLayout = ({ children }) => {
  const navigte = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("testToken")) {
      navigte("/");
    }
  }, [localStorage.getItem("testToken")]);

  const logout = () => {
    localStorage.removeItem("testToken");
    window.location.reload();
  };

  return (
    <div className="pr_ly_container">
      <div className="pr_ly_sidebar">
        <ul className="ly_list">
          <li
            className={`ly_list_item ${
              pathname === "/profile" ? "route_active" : ""
            }`}
          >
            <a href="/profile">Profil malumotlar</a>
          </li>
          <li
            className={`ly_list_item ${
              pathname === "/profile/orders" ? "route_active" : ""
            }`}
          >
            <a href="/profile/orders">Mening buyurtmalarim</a>
          </li>
          <li
            className={`ly_list_item ${
              pathname === "/profile/market" ? "route_active" : ""
            }`}
          >
            <a href="/profile/market">Market</a>
          </li>
          <li
            className={`ly_list_item ${
              pathname === "/profile/game" ? "route_active" : ""
            }`}
          >
            <a href="/profile/game">Konkurs</a>
          </li>
          <li
            className={`ly_list_item ${
              pathname === "/profile/balance" ? "route_active" : ""
            }`}
          >
            <a href="/profile/balance">mening balansim</a>
          </li>
          <li onClick={logout} className={`ly_list_item`}>
            Profildan chiqish
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
