import React from "react";
import { ShowData } from "../Components/ShowData";
import { FetchCatData } from "../Components/FetchCatData";

export const Mens = () => {
  let data = FetchCatData("men's clothing");

  return (
    <div>
      <div className="banner">
        <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/a83a26c1-7c63-4aad-ae5c-c296c7e473901632501075885-main-banner-3-DK.jpg"
          alt=""
        />
      </div>
      <div className="productPage">
        <ShowData data={data} />
      </div>
    </div>
  );
};
