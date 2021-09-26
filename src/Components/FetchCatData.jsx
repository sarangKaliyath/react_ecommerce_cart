import axios from "axios";
import { useState, useEffect } from "react";

export const FetchCatData = (endpoint) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get(`https://fakestoreapi.com/products/category/${endpoint}`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
