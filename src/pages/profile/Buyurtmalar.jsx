import "./css/order.css";
import React, { useEffect, useState } from "react";
import ProfileLayout from "../../components/PrfoileLayout";
import axios from "axios";
import { getStatusName } from "./Details";
import format from "date-fns/format";
import uz from "date-fns/esm/locale/uz";

const ProfileBuyurtmalar = () => {
  const [data, setData] = useState([]);

  const getUserOrders = async () => {
    const token = localStorage.getItem("testToken");
    try {
      const res = await axios({
        url: "https://newshop.herokuapp.com/api/order/all",
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
    getUserOrders();
  }, []);
  return (
    <ProfileLayout>
      <div className="order_container">
        <div className="order_header">
          <h2 className="order_header_name">Buyurtmlar tarixi</h2>
        </div>
        <div className="table_container">
          <table className="table_box">
            <thead className="table_head">
              <tr>
                <th>ID</th>
                <th>Holati</th>
                <th>Vaqti</th>
                <th>Umumiy</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table_body">
              {data.map((item) => {
                const status = getStatusName(item.status);
                return (
                  <tr key={item._id}>
                    <td>{item.number}</td>
                    <td>
                      <span
                        className="table_status"
                        style={{ color: status.color }}
                      >
                        {status.name}
                      </span>
                    </td>
                    <td>
                      {format(new Date(item.createdAt), "dd-MMMM, yyyy", {
                        locale: uz,
                      })}
                    </td>
                    <td>{item.referal_price?.toLocaleString()} so'm</td>
                    <td>keyingi</td>
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

export default ProfileBuyurtmalar;
