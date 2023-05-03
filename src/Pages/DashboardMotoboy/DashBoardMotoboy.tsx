// import { useContext } from "react";
// import { UserContext } from "../../providers/UserContext";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobCard } from "../../components/JobCard/JobCard";
import { JobList } from "../../components/DashboardTemplate/JobList";
import { ButtonDefault } from "../../styles/buttons";

export const DashMotoboy = () => {
  //   const { logout } = useContext(UserContext);
  return (
    <DashboardTemplate>
      {/* {jobById.length > 0 ? (
        jobById.map((job) => {
          const currentJob = () => {
            setCurrentJob(job);
          };

          return ( */}
      <JobList>
        <JobCard key={1} callback={() => {}}>
          <div className="Card__Info__Detail">
            <h5>Local Da Entrega</h5>
            <p>lorem ipsum</p>
          </div>
          <div className="Card__Info__Detail">
            <h5>Taxa/entrega</h5>
            {/* <p>{`R$:${job.price}`}</p> */}
            <p>{`R$:40,00`}</p>
          </div>
          <div className="interactionButtonsContainer">
            <ButtonDefault
              className="fullWidth"
              buttonSize="medium"
              buttonStyle="yellow"
              onClick={() => {}}
            >
              Aceitar entrega
            </ButtonDefault>
          </div>
        </JobCard>
      </JobList>
      {/* );
        })
      ) : (
        <h3> Você ainda não cadastrou nenhuma entrega </h3>
      )} */}
    </DashboardTemplate>
  );
};
