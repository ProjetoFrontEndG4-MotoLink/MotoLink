import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobCard } from "../../components/JobCard/JobCard";
import { JobList } from "../../components/DashboardTemplate/JobList";
import { ButtonDefault } from "../../styles/buttons";
import { useContext } from "react";
import { JobsContext } from "../../providers/JobsContext";
import { AsideContainer } from "../../components/DashboardTemplate/AsideJobsContainer";
import { AsideCard } from "../../components/DashboardTemplate/AsideJobsContainer/AsideCards/AsideCard";
import { UserContext } from "../../providers/UserContext";
import { UpdateModalMotoboy } from "./ModalEditProfile";

export const DashMotoboy = () => {

  const{ openModalMoto}=useContext(UserContext)
  const { jobsNotAccept, acceptJob, jobsAccept } = useContext(JobsContext);

  return (
    <>

    {openModalMoto? <UpdateModalMotoboy/>:null}
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
                  <AsideCard key={job.id}>
                    <h4>Empresa: {job.companyName}</h4>
                    <h5>Endereço: {job.local}</h5>
                    <p>Taxa : {job.price}</p>
                  </AsideCard>
                );
              })
            : "Nenhuma entrega aceita"}
        </AsideContainer>
      }
    />
    
    </>
   
  );
};
