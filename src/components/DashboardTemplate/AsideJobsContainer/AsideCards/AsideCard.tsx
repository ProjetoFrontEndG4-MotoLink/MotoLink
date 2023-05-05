import React from "react";
import { AsideCardTemplate } from "./AsideCards";

interface IAsideCardProp {
  children: React.ReactNode;
}

export const AsideCard = ({ children }: IAsideCardProp) => {
  return <AsideCardTemplate>{children}</AsideCardTemplate>;
};
