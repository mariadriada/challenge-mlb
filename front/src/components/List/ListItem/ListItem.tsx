import React, { FC } from "react";
import { Link } from "react-router-dom";

import { FreeShipping } from "../../FreeShipping";
import { formatter } from "../../../general-functions";
import { Item } from "../../../types";
import "./list-item.scss";

const ListItem: FC<Item> = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping: freeShipping,
  state_name: stateName,
}: Item) => {
  const { amount } = price;
  return (
    <div className="list-item">
      <Link to={`/items/${id}`}>
        <div className="list-item__img">
          <img src={picture} alt={title} />
        </div>
      </Link>
      <div className="list-item__detail">
        <span className="list-item__detail-price">
          {formatter().format(amount).replace("$", "$  ").replace(",", ".")}
          {freeShipping && (
            <div className="list-item__detail-free">
              <FreeShipping />
            </div>
          )}
        </span>
        <p>{title}</p>
        <p>{condition}</p>
      </div>
      <div className="list-item__state">{stateName}</div>
      <div className="list-item__line" />
    </div>
  );
};

export default ListItem;
