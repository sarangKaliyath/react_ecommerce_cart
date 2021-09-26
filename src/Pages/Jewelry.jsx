import React from "react";
import { ShowData } from "../Components/ShowData";
import { FetchCatData } from "../Components/FetchCatData";

export const Jewelry = () => {

  let data = FetchCatData("jewelery");

  return (
    <div>
      <div className="banner">
        <img
          src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/4c84c9ba-84ac-4f58-8018-343bbdfff03d/desktop/Desktop---1000-200.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-4c84c9ba-84ac-4f58-8018-343bbdfff03d-desktop-nLa9.bc"
                  alt=""
        />
      </div>
      <div className="productPage">
        <ShowData data={data} />
      </div>
    </div>
  );
};
