import { useContext } from "react";
import { UpdateModalEmpresas } from "../../components/UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";
import { ModalAddNewJob } from "../../components/ModalAddNewJobs";
import { ModalUpJob } from "../../components/ModalUpdateJobs";
import { DashboardTemplate } from "../../components/DashboardTemplate";

export const DashEmpresas = () => {
  const { openModal } = useContext(UserContext);
  const { setOpenModalAddJob, openModalAddJob, openModalUpJob } =
    useContext(JobsContext);

  const renderAddJobModal = () => {
    setOpenModalAddJob(true);
  };

  return (
    <>
      {openModal ? <UpdateModalEmpresas /> : null}
      {openModalAddJob ? <ModalAddNewJob /> : null}
      {openModalUpJob ? <ModalUpJob /> : null}
      <DashboardTemplate callback={renderAddJobModal} />
    </>
  );
};
