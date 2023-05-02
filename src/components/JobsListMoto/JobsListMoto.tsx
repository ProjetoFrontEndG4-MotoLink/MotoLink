import { JobsCardMoto } from "./JobsCardMoto/JobsCardMoto";
import { JobsContext } from "../../providers/JobsContext";
import { useContext } from "react";

export const JobsListMoto = () => {
	const { jobsList } = useContext(JobsContext);
    console.log(jobsList)
	return (
		<ul>
			{jobsList.map((job) => (
				<JobsCardMoto key={job.id} job={job} />
			))}
		</ul>
	);
};
