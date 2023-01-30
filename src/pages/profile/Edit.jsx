import React from "react";
import "./css/detail.css";
import ProfileLayout from "../../components/PrfoileLayout";
import axios from "axios";
import { useEffect, useState } from "react";

export const getStatusName = (type) => {
  switch (type) {
    case "new":
      return { name: "Yangi", color: "green" };
    case "ready":
      return { name: "Tayyor", color: "orange" };
    case "onway":
      return { name: "Yo'lda", color: "blue" };
    case "delivered":
      return { name: "Yetkazlidi", color: "darkgreen" };
    case "canceled":
      return { name: "Atkaz", color: "red" };
    case "hold":
      return { name: "Kutilmoqda", color: "purple" };
    case "archived":
      return { name: "Arxivlangan", color: "brown" };
    default:
      return { name: "", color: "" };
  }
};

const ProfileEdit = () => {
  const [data, setData] = useState({});

  const getProfileData = async () => {
    const token = localStorage.getItem("testToken");
    try {
      const res = await axios({
        url: "https://newshop.herokuapp.com/api/user/profile",
        method: "GET",
        headers: {
          auth: `12345${token}`,
        },
      });
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileLayout>
      <div className="pdt_container">
        <div className="pdt_media">
          <div className="profile_image">
            <img src={data?.user?.avatar} alt="profile avatar" />
            <div className="pdt_name_b">
              <h5>{data?.user?.name}</h5>
              <h6>Balans: {data?.user?.balance} so'm</h6>
            </div>
          </div>
          <form className="edit_form">
            <div className="input_container">
              <input placeholder="Ism" />
            </div>
            <div className="input_container">
              <input placeholder="Ism" />
            </div>
            <div className="input_container">
              <input placeholder="Ism" />
            </div>
            <div className="input_container">
              <input placeholder="Ism" />
            </div>
            <div className="input_container">
              <button>SAQLASH</button>
            </div>
          </form>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileEdit;
