import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobCard } from "../../components/JobCard/JobCard";
import { JobList } from "../../components/DashboardTemplate/JobList";
import { ButtonDefault } from "../../styles/buttons";
import { useContext } from "react";
import {JobsContext } from "../../providers/JobsContext";



export const DashMotoboy = () => {
  const {jobsNotAccept, acceptJob} = useContext(JobsContext)


  return (
    <DashboardTemplate>
      <JobList>
        {jobsNotAccept.map((job)=> (
          <JobCard key={job.id}  job={job}>
          <div className="Card__Info__Detail">
            <h5>Local Da Entrega</h5>
            <p>{job.local}</p>
          </div>
          <div className="Card__Info__Detail">
            <h5>Taxa/entrega</h5>
            <p>{`R$${job.price}`}</p>
          </div>
          <div className="interactionButtonsContainer">
            <ButtonDefault
              className="fullWidth"
              buttonSize="medium"
              buttonStyle="yellow"
              onClick={() => {
                acceptJob(job.id)
              }}
            >
              Aceitar entrega
            </ButtonDefault>
          </div>
        </JobCard>
        ))}
      </JobList>
    </DashboardTemplate>
  );
};
