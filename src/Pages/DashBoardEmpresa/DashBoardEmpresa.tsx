import { useContext } from "react";
import { UpdateModalEmpresas } from "../../components/UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";
import { ModalAddNewJob } from "../../components/ModalAddNewJobs";
import { ModalUpJob } from "../../components/ModalUpdateJobs";
import { DashboardTemplate } from "../../components/DashboardTemplate";
import { JobListEmpresas } from "../../components/DashboardTemplate/JobListEmpresas";
import { JobCard } from "../../components/JobCard/JobCard";

export const DashEmpresas = () => {
  const { openModal } = useContext(UserContext);
  const { jobById, setOpenModalAddJob, openModalAddJob, openModalUpJob } =
    useContext(JobsContext);

  const renderAddJobModal = () => {
    setOpenModalAddJob(true);
  };

  return (
    <>
      {openModal ? <UpdateModalEmpresas /> : null}
      {openModalAddJob ? <ModalAddNewJob /> : null}
      {openModalUpJob ? <ModalUpJob /> : null}
      <DashboardTemplate callback={renderAddJobModal}>
        <JobListEmpresas>
          {jobById.length > 0 ? (
            jobById.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })
          ) : (
            <h1> Você ainda não cadastrou nenhuma entrega </h1>
          )}
        </JobListEmpresas>
      </DashboardTemplate>
    </>
  );
};
