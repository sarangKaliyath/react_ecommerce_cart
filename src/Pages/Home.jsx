import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ShowData } from "../Components/ShowData";

export const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="banner">
        <img
          src="https://rukminim1.flixcart.com/flap/844/140/image/00fc8186d9252fdd.jpg?q=50"
          alt=""
        />
      </div>
      <div className="productPage">
        <ShowData data={data} />
      </div>
    </div>
  );
};
