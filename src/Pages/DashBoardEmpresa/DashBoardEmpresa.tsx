import { useContext } from "react";

import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";
import { DashboardHeader } from "../../components/Header/DashboardHeader";

import { UpdateModalEmpresas } from "../../components/UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";
import { ModalAddNewJob } from "../../components/ModalAddNewJobs";
import { JobListEmpresas } from "../../components/JobListempresas";
import { ModalUpJob } from "../../components/ModalUpdateJobs";
import { Footer } from "../../components/Footer";
import { UserDashboardInfo } from "../../components/UserDashboardInfo";

export const DashEmpresas = () => {
  const { openModal } = useContext(UserContext);
  const { setOpenModalAddJob, openModalAddJob, openModalUpJob } =
    useContext(JobsContext);

  return (
    <>
      {openModal ? <UpdateModalEmpresas /> : null}
      {openModalAddJob ? <ModalAddNewJob /> : null}
      {openModalUpJob ? <ModalUpJob /> : null}

      <DashboardHeader />

      <main className="container">
        <UserDashboardInfo />

        <div>
          <h1>Entregas Publicadas</h1>
          <button onClick={() => setOpenModalAddJob(true)}>
            Adicionar nova entrega
          </button>
        </div>

        <JobListEmpresas />

        <AsideCard />
      </main>

      <Footer />
    </>
  );
};
