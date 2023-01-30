import React from "react";
import "./css/game.css";
import ProfileLayout from "../../components/PrfoileLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const UserGame = () => {
  const [data, setData] = useState({});

  const getGame = async () => {
    try {
      const res = await axios.get("https://newshop.herokuapp.com/api/konkurs");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGame();
  }, []);


  return (
    <ProfileLayout>
      <div className="game_container">
        <div className="media_container">
          <img
            src={data?.konkurs?.banner}
            className="game_banner"
            alt="Game banner"
          />
          <div className="game_media_overlay"></div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default UserGame;
