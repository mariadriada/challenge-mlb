import React, { FC } from "react";

import LogoImg from "../../assets/images/Logo_ML@2x.png";

import "./logo.scss";

const Logo: FC = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="Dos manos unidas" />
    </div>
  );
};

export default Logo;
