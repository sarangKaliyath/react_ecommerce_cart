import React from 'react';
import { ShowData } from '../Components/ShowData';
import {FetchCatData} from '../Components/FetchCatData';

export const Electronics = () => {

    let data = FetchCatData('electronics');

    return (
      <div>
        <div className="banner">
          <img
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1632451833/Croma%20Assets/CMS/Homepage%20Banners/Homepage%20Rotating%20Banner%20Video/HP_iphone13_series_withHDFC_23sept_dvgvuj.jpg/fltn,mxw_2048,f_auto"
            alt=""
          />
        </div>
        <div className="productPage">
          <ShowData data={data} />
        </div>
      </div>
    );
}
