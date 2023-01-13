import React, { FC } from "react";

import { WithChildren } from "../../types";
import "./button.scss";

const Button: FC<WithChildren> = ({ children }: WithChildren) => {
  return (
    <div className="button">
      {children}
    </div>
  );
};

export default Button;
