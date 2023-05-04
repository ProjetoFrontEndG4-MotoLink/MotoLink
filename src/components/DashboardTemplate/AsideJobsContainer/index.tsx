import { useContext } from "react";
import { AsideStyle } from "./AsideStyle";
import { IJobs, JobsContext } from "../../../providers/JobsContext";
import { AsideCard } from "./AsideCards/AsideCard";

export interface IJobsProps{
  jobs: IJobs
}

export const AsideContainer = () => {
  const {jobsAccept} = useContext(JobsContext)
  
  return (
    <AsideStyle>
      <h3>Entregas aceitas</h3>
      <ul>{jobsAccept.map((jobs)=>(
        <AsideCard key={jobs.id} jobs={jobs}/>
      ))}</ul>
    </AsideStyle>
  );
};
