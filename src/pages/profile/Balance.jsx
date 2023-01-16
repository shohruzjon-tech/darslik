import "./css/balance.css";
import React, { useEffect, useState } from "react";
import ProfileLayout from "../../components/PrfoileLayout";
import { format } from "date-fns";
import { uz } from "date-fns/locale";
import axios from "axios";

const ProfileBalans = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(undefined);

  const [submit, setSubmit] = useState({
    card: "",
    amount: "",
  });

  const handleChange = (e) => {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
  };

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
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPaymentHistory = async () => {
    const token = localStorage.getItem("testToken");
    try {
      const res = await axios({
        url: "https://newshop.herokuapp.com/api/payment/user-payment",
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

  const makePayment = async () => {
    const token = localStorage.getItem("testToken");
    try {
      await axios({
        url: "https://newshop.herokuapp.com/api/payment/add",
        method: "POST",
        data: submit,
        headers: {
          auth: `12345${token}`,
        },
      });
      getUserPaymentHistory();
      alert("So'rov qabul qilindi!");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getUserPaymentHistory();
    getProfileData();
  }, []);
  return (
    <ProfileLayout>
      <div className="balance_container">
        <h4 className="balance_header_text">Mening to'lovlarim</h4>
        <div className="balance_cards">
          <div className="balance_card">
            <h3>Mening hisobim</h3>
            <div className="balance_line">
              <h4>Balans:</h4>
              <h5>{user?.user.balance?.toLocaleString()} so'm</h5>
            </div>
            <div className="balance_line">
              <h4>To'lab berildi:</h4>
              <h5>{user?.user.paid?.toLocaleString()} so'm</h5>
            </div>
          </div>
          <div className="balance_card">
            <h3>To'lov uchun so'rov yuborish</h3>
            <form className="payment_form mt-15">
              <input
                className="form_input"
                type="number"
                placeholder="Karta raqami"
                onChange={handleChange}
                value={submit.card}
                name="card"
              />
              <input
                className="form_input"
                type="number"
                placeholder="Pul miqdori"
                name="amount"
                onChange={handleChange}
                value={submit.amount}
              />
              <div className="btn_container">
                <button onClick={makePayment} className="py_btn" type="button">
                  Surov junatish
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="table_container">
          <table className="table_box">
            <thead className="table_head">
              <tr>
                <th>ID</th>
                <th>Sana</th>
                <th>Hisob raqam</th>
                <th>summa</th>
                <th>Holati</th>
                <th>Habar</th>
              </tr>
            </thead>
            <tbody className="table_body">
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id?.slice(0, 10)}...</td>
                    <td>
                      {format(new Date(item.createdAt), "dd-MMMM, yyyy", {
                        locale: uz,
                      })}
                    </td>
                    <td>{item.card}</td>
                    <td>
                      <span className="table_status">
                        {item.amount?.toLocaleString()} so'm
                      </span>
                    </td>
                    <td>yangi</td>
                    <td>{item.message}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileBalans;
