import React, { FC } from "react";

import { ListItem } from "./ListItem";
import { ListProps } from "../../types";
import "./list.scss";

const List: FC<ListProps> = ({ dataList }: ListProps) => {
  console.log("dataList", dataList);
  return (
    <div className="list">
      {dataList && dataList.map((i, index) => <ListItem key={index} {...i} />)}
    </div>
  );
};

export default List;
