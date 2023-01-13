import React, { FC } from "react";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/images/Logo_ML@2x.png";
import "./logo.scss";

const Logo: FC = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src={LogoImg} alt="Dos manos unidas" />
      </div>
    </Link>
  );
};

export default Logo;
