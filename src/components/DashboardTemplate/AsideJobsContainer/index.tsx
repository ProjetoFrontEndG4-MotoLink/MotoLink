import { useContext } from "react";
import { AsideStyle } from "./AsideStyle";
import { IJobs, JobsContext } from "../../../providers/JobsContext";
import { AsideCard } from "./AsideCards/AsideCard";

export interface IJobsProps{
  jobs: IJobs
}
type JobAsideProps = {
  children: React.ReactNode;
};

export const AsideContainer = ({children}:JobAsideProps) => {
  const {jobsAccept} = useContext(JobsContext)
  
  return (
    <AsideStyle> {children}
   
      {/*
      <ul>{jobsAccept.map((jobs)=>(
        <AsideCard key={jobs.id} jobs={jobs}/>
      ))}</ul> */}
    </AsideStyle>
  );
};
