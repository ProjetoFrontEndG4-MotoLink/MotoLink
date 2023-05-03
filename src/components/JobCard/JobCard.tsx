import { useContext } from "react";
import { IJobs, JobsContext } from "../../providers/JobsContext";
import { CardTemplate } from "./JobCardStyle";

interface ICardProp {
  children: React.ReactNode;
  job: IJobs;
}

export const JobCard = ({ children, job}: ICardProp) => {
  const {setCurrentJob} = useContext(JobsContext)
  return (
    <CardTemplate onClick={() => setCurrentJob(job)}>
      <h4>Entrega</h4>
      <div className="Card__Info--default">{children}</div>
    </CardTemplate>
  );
};
