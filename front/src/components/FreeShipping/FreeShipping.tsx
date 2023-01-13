import React, { FC } from "react";

import FreeShippingImg from "../../assets/images/ic_shipping.png";
import "./free-shipping.scss";

const FreeShipping: FC = () => {
  return (
    <div className="free-shiping">
      <img src={FreeShippingImg} alt="" />
    </div>
  );
};

export default FreeShipping;
