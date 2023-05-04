import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobCard } from "../../components/JobCard/JobCard";
import { JobList } from "../../components/DashboardTemplate/JobList";
import { ButtonDefault } from "../../styles/buttons";
import { useContext } from "react";
import { JobsContext } from "../../providers/JobsContext";
import { AsideContainer } from "../../components/DashboardTemplate/AsideJobsContainer";
import { AsideCard } from "../../components/DashboardTemplate/AsideJobsContainer/AsideCards/AsideCard";

export const DashMotoboy = () => {
  const { jobsNotAccept, acceptJob, jobsAccept } = useContext(JobsContext);
  console.log(jobsAccept);
  return (
    <DashboardTemplate
      firstChildren={
        <JobList>
          {jobsNotAccept.length > 0 ? (
            jobsNotAccept.map((job) => (
              <JobCard key={job.id} job={job}>
                <div className="Card__Info__Detail">
                  <h5>Local Da Entrega</h5>
                  <p>{job.local}</p>
                </div>
                <div className="Card__Info__Detail">
                  <h5>Taxa/entrega</h5>
                  <p>{`R${job.price}`}</p>
                </div>
                <div className="interactionButtonsContainer">
                  <ButtonDefault
                    className="fullWidth"
                    buttonSize="medium"
                    buttonStyle="yellow"
                    onClick={() => {
                      acceptJob(job.id);
                    }}
                  >
                    Aceitar entrega
                  </ButtonDefault>
                </div>
              </JobCard>
            ))
          ) : (
            <p className="textDefaultBold">Nenhuma entrega aceita</p>
          )}
        </JobList>
      }
      secondChildren={
        <AsideContainer>
          {jobsAccept.length > 0
            ? jobsAccept.map((job) => {
                return (
                  <AsideCard>
                    <h3>{job.companyName}</h3>
                    <p className="textSmallBold">Entrega</p>
                    <h5>{job.local}</h5>
                    <p className="textSmallBold">Taxa</p>
                    <p>{job.price}</p>
                  </AsideCard>
                );
              })
            : "Nenhuma entrega aceita"}
        </AsideContainer>
      }
    />
  );
};
