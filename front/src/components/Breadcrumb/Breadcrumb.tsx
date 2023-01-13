import React, { FC } from "react";
import { Link } from "react-router-dom";

import { BreadcrumbProps } from "../../types";
import "./breadcrumb.scss";

const Breadcrumb: FC<BreadcrumbProps> = ({ data }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      {data &&
        data.map((item, i) => (
          <Link to="" key={i} className="breadcrumb__Link--disable">
            {item} {i < data.length - 1 && ">"}
          </Link>
        ))}
    </div>
  );
};

export default Breadcrumb;
