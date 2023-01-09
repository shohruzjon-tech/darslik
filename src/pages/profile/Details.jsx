import React from "react";
import "./css/detail.css";
import ProfileLayout from "../../components/PrfoileLayout";
import axios from "axios";
import { useEffect, useState } from "react";

export const getStatusName = (type) => {
  switch (type) {
    case "new":
      return {name: "Yangi", color: "green"};
    case "ready":
      return {name: "Tayyor", color: "orange"};
    case "onway":
      return {name: "Yo'lda", color: "blue"};
    case "delivered":
      return {name: "Yetkazlidi", color: "darkgreen"};
    case "canceled":
      return {name: "Atkaz", color: "red"};
    case "hold":
      return {name: "Kutilmoqda", color: "purple"};
    case "archived":
      return {name: "Arxivlangan", color: "brown"};
    default:
      return {name: "", color: ""};
  }
};

const ProfileDetails = () => {
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
          <span>{data?.user?.status ? "FAOL" : "BLOKLANGAN"}</span>
        </div>
        <div className="status_container">
          {Object.entries(data?.orderCount ? data?.orderCount : {}).map(
              (item) => {
                  const status = getStatusName(item[0]);
              return (
                <div className="pdt_media">
                  <h4 style={{ color: status.color}}>{item[1]}</h4>
                  <h5 style={{ color: status.color}}>{status.name}</h5>
                </div>
              );
            }
          )}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileDetails;
