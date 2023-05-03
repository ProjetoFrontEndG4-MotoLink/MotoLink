import { useContext } from "react";
import { IJobsProps } from "..";
import { AsideCardTemplate } from "./AsideCards";
import { UserContext } from "../../../../providers/UserContext";

export const AsideCard = ({jobs}: IJobsProps) => {
	const {user} = useContext(UserContext)
	return (
		<AsideCardTemplate>
			<h4>{user?.name}</h4>
			<div className="Card__Info__Detail">
				<h5>{jobs.local}</h5>
				<p>{jobs.price}</p>
			</div>
		</AsideCardTemplate>
	);
};
