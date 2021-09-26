import React from "react";

export const ShowData = ({data}) => {
    return (data.map((el) => {
        return (
            <div key={el.id} className="product">
                <div>
                    <img src={el.image} alt="" />
                </div>
                <div>{el.title}</div>
                <div>${el.price}</div>
                <div>Rating:{el.rating.rate}</div>

                <button>Add to Cart</button>
            </div>
        );
    }));
};
