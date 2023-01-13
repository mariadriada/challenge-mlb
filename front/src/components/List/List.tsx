import React, { FC } from "react";

import { ListItem } from "./ListItem";
import { ListProps } from "../../types";

const List: FC<ListProps> = ({ dataList }: ListProps) => {
  return (
    <div className="list">
      {dataList && dataList.map((i, index) => 
      <ListItem key={index} {...i} />)}
    </div>
  );
};

export default List;
