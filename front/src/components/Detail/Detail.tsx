import React, { FC } from "react";

import { Button } from "../Button";
import { OneItem } from "../../types";
import { formatter } from "../../general-functions";
import "./detail.scss";

const Detail: FC<OneItem> = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping: freeShiping,
  sold_quantity: soldQuantity,
  description,
}: OneItem) => {
  return (
    <section className="detail">
      <div className="detail__image">
        <img src={picture} alt={title} />
      </div>
      <div className="detail__offer">
        <span>
          {condition} - {soldQuantity} Vendidos
        </span>
        <h2>{title}</h2>
        <span>
          {price?.amount &&
            formatter()
              .format(price?.amount)
              .replace("$", "$  ")
              .replace(",", ".")}
        </span>
        <Button>Comprar</Button>
      </div>
      <div className="detail__description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Detail;
