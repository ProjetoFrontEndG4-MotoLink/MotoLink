import React from "react";
import { AsideCardTemplate } from "./AsideCards";

interface IAsideCardProp {
  children: React.ReactNode;
}

export const AsideCard = ({ children }: IAsideCardProp) => {
  return (
    <AsideCardTemplate>
      <div className="Card__Info__Detail">{children}</div>
    </AsideCardTemplate>
  );
};
