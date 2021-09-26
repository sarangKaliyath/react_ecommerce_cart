import React from 'react';
import { ShowData } from "../Components/ShowData";
import { FetchCatData } from "../Components/FetchCatData";

export const Women = () => {

    let data = FetchCatData("women's clothing");

  return (
    <div>
      <div className="banner">
        <img
          src="https://i.pinimg.com/originals/19/5c/70/195c705a0432afc871d2e6c4c5dbbe7b.jpg"
          alt=""
        />
      </div>
      <div className="productPage">
        <ShowData data={data} />
      </div>
    </div>
  );
}
