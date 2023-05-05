import { useContext } from "react";
import { UpdateModalEmpresas } from "./UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";
import { ModalAddNewJob } from "./ModalAddNewJobs";
import { ModalUpJob } from "./ModalUpdateJobs";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobList } from "../../components/DashboardTemplate/JobList";
import { JobCard } from "../../components/JobCard/JobCard";
import { ButtonDefault } from "../../styles/buttons";
import { AsideCard } from "../../components/DashboardTemplate/AsideJobsContainer/AsideCards/AsideCard";
import { AsideContainer } from "../../components/DashboardTemplate/AsideJobsContainer";

export const DashEmpresas = () => {
  const { openModal } = useContext(UserContext);
  const {
    deleteJob,
    jobById,
    setOpenModalUpJob,
    aceptedJobEmpresas,
    openModalAddJob,
    openModalUpJob,
  } = useContext(JobsContext);

  return (
    <>
      {openModal ? <UpdateModalEmpresas /> : null}

      {openModalAddJob ? <ModalAddNewJob /> : null}
      {openModalUpJob ? <ModalUpJob /> : null}
      <DashboardTemplate
        buttonAddJob={true}
        firstChildren={
          <JobList>
            {jobById.length > 0 ? (
              jobById.map((job) => {
                return (
                  <JobCard key={job.id} job={job}>
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
                        buttonStyle="orange"
                        onClick={() => setOpenModalUpJob(true)}
                      >
                        Editar
                      </ButtonDefault>
                      <ButtonDefault
                        buttonSize="medium"
                        buttonStyle="lightGrey"
                        onClick={() => deleteJob(job.id)}
                      >
                        Excluir
                      </ButtonDefault>
                    </div>
                  </JobCard>
                );
              })
            ) : (
              <h3> Você ainda não cadastrou nenhuma entrega </h3>
            )}
          </JobList>
        }
        secondChildren={
          <AsideContainer>
            <h3>Entregas aceitas</h3>
            {aceptedJobEmpresas.length > 0 ? (
              aceptedJobEmpresas.map((job) => {
                return (
                  <AsideCard key={job.id}>
                    <p className="textDefaultBold">Motoboy: {job.name}</p>
                    <p className="textSmallBold">Endereço: {job.local}</p>
                    <p>Placa da Moto: {job.plate}</p>
                  </AsideCard>
                );
              })
            ) : (
              <p className="textSmallBold">Nenhuma entrega aceita</p>
            )}
          </AsideContainer>
        }
      />
    </>
  );
};
