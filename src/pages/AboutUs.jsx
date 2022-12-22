import React, { useState } from "react";
import "./css/AboutUs.css";

const AboutUs = () => {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);

  const handleActiveBtn1 = () => {
    if (btn2) {
      setBtn2(false);
      setBtn1(true);
    }
  };

  const handleActiveBtn2 = () => {
    if (btn1) {
      setBtn1(false);
      setBtn2(true);
    }
  };

  return (
    <div className="AboutUs_container">
      <h2>Biz haqimizda</h2>
      <div className="about_content">
        <p className="content_text">
          Однако желание помочь не ограничивается только этим. Мы стараемся
          помочь нашим клиентам, решать проблемы, с которыми сталкиваются
          пользователи наших проектов. Однако желание помочь не ограничивается
          только этим. Мы стараемся помочь нашим клиентам, решать проблемы, с
          которыми сталкиваются пользователи наших проектов. Однако желание
          помочь не ограничивается только этим. Мы стараемся помочь нашим
          клиентам, решать проблемы, с которыми сталкиваются пользователи наших
          проектов. Однако желание помочь не ограничивается только этим. Мы
          стараемся помочь нашим клиентам, решать проблемы, с которыми
          сталкиваются пользователи наших проектов.
        </p>
        <p className="content_text">
          Однако желание помочь не ограничивается только этим. Мы стараемся
          помочь нашим клиентам, решать проблемы, с которыми сталкиваются
          пользователи наших проектов. Однако желание помочь не ограничивается
          только этим. Мы стараемся помочь нашим клиентам, решать проблемы, с
          которыми сталкиваются пользователи наших проектов. Однако желание
          помочь не ограничивается только этим. Мы стараемся помочь нашим
          клиентам, решать проблемы, с которыми сталкиваются пользователи наших
          проектов. Однако желание помочь не ограничивается только этим. Мы
          стараемся помочь нашим клиентам, решать проблемы, с которыми
          сталкиваются пользователи наших проектов.
        </p>
        <p className="content_text">
          Однако желание помочь не ограничивается только этим. Мы стараемся
          помочь нашим клиентам, решать проблемы, с которыми сталкиваются
          пользователи наших проектов. Однако желание помочь не ограничивается
          только этим. Мы стараемся помочь нашим клиентам, решать проблемы, с
          которыми сталкиваются пользователи наших проектов. Однако желание
          помочь не ограничивается только этим. Мы стараемся помочь нашим
          клиентам, решать проблемы, с которыми сталкиваются пользователи наших
          проектов. Однако желание помочь не ограничивается только этим. Мы
          стараемся помочь нашим клиентам, решать проблемы, с которыми
          сталкиваются пользователи наших проектов.
        </p>
      </div>
      <div className="tab_container">
        <div className="tab_button_container">
          <button
            onClick={handleActiveBtn1}
            className={`tab_button ${btn1 ? "tab_active" : ""}`}
          >
            Bizning manzil
          </button>
        </div>
        <div className="tab_button_container">
          <button
            onClick={handleActiveBtn2}
            className={`tab_button ${btn2 ? "tab_active" : ""}`}
          >
            Biz bilan aloqa
          </button>
        </div>
      </div>
      {btn1 ? (
        <div className="tab_content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2119.1737997634364!2d69.2424820532492!3d41.309639616791586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b084eab8999%3A0xb2d2bdd029eeec98!2sBunyodkor!5e0!3m2!1sen!2s!4v1671724852843!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ) : (
        <div className="tab_content">
          <ul className="contact_list">
            <li className="contact_list_item">Tel: +998976382481</li>
            <li className="contact_list_item">Email: vipitacademy@gmail.com</li>
            <li className="contact_list_item">Fax: 9093094823049</li>
            <li className="contact_list_item">
              Biz bilan 24 soat mobaynida bog'lanishnigiz mumkin
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
