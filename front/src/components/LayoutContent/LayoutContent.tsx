import React, { FC } from "react";

import { WithChildren } from "../../types";
import "./layout-content.scss";

const LayoutContent: FC<WithChildren> = ({ children }: WithChildren) => {
  return (
    <section className="layout-content">
     {children}
    </section>
  );
};

export default LayoutContent;
