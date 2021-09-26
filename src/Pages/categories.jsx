import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

export const Electronics = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios
          .get("https://fakestoreapi.com/products/categories")
          .then((res) => {
            console.log(res.data);
          });
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="cat">
            <div className="sidebarCat"></div>
            <div className="showCat"></div>
        </div>
    )
}
