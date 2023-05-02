import { useContext } from "react";
import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";
import { DashboardHeader } from "../../components/Header/DashboardHeader";

import { ButtonDefault } from "../../styles/buttons";
import { UpdateModalEmpresas } from "../../components/UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";
import { ModalAddNewJob } from "../../components/ModalAddNewJobs";
import { JobListEmpresas } from "../../components/JobListempresas";
import { ModalUpJob } from "../../components/ModalUpdateJobs";
import { Footer } from "../../components/Footer";
import { DropDownMenu } from "../../components/Header/DropDownMenu";

export const DashEmpresas = () => {
  const { user, openModal } = useContext(UserContext);
  const { setOpenModalAddJob, openModalAddJob, openModalUpJob } =
    useContext(JobsContext);

  return (
    <>
      <DashboardHeader />

      <main className="container">
        <div>
          <h1>{user?.name}</h1>
          <h3>Setor:{user?.setor}</h3>
          <h3>Telefone:{user?.telefone}</h3>
          <h3>E-mail:{user?.email}</h3>
        </div>

        <div>
          <h1>Entregas Publicadas</h1>
          <button onClick={() => setOpenModalAddJob(true)}>
            Adicionar nova entrega
          </button>
        </div>
        <JobListEmpresas />

        {openModal ? <UpdateModalEmpresas /> : null}
        {openModalAddJob ? <ModalAddNewJob /> : null}
        {openModalUpJob ? <ModalUpJob /> : null}

        <AsideCard />
      </main>

      <Footer />
    </>
  );
};
