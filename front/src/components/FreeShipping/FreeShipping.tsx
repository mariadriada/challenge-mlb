import React, { FC } from "react";

import FreeShippingMobileImg from "../../assets/images/ic_shipping.png";
import FreeShippingDesktopImg from "../../assets/images/ic_shipping@2x.png";
import "./free-shipping.scss";

const FreeShipping: FC = () => {
  return (
    <div className="free-shiping">
      <img src={FreeShippingMobileImg} alt="" />
    </div>
  );
};

export default FreeShipping;
