import React, { useContext } from "react";
import { IJobsProps } from "..";
import { AsideCardTemplate } from "./AsideCards";
import { UserContext } from "../../../../providers/UserContext";
import { ICardProp } from "../../../JobCard/JobCard";

interface IAsideCardProp{
children:React.ReactNode
}


export const AsideCard = ({children}: IAsideCardProp) => {
	const {user} = useContext(UserContext)
	return (
		<AsideCardTemplate>
			<div className="Card__Info__Detail">
				{children}
			</div>
		</AsideCardTemplate>
	);
};
