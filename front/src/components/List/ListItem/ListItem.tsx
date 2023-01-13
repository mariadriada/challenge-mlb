import React, { FC } from "react";

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
  console.log(price);
  const { amount } = price;
  return (
    <div className="list-item">
      <div className="list-item__img">
        <img src={picture} alt={title} />
      </div>
      <div className="list-item__detail">
        <span className="list-item__detail-price">
          {formatter.format(amount)}
          {freeShipping && (
            <div className="list-item__detail-free">
              <FreeShipping />
            </div>
          )}
        </span>
        <p>{title}</p>
      </div>
      <div className="list-item__state">{stateName}</div>
    </div>
  );
};

export default ListItem;
