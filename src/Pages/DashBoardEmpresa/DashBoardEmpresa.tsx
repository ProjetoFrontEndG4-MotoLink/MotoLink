import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { JobCard } from "../../components/JobCard/JobCard";
import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";
import { DashboardHeader } from "../../components/Header/DashboardHeader";
import { ButtonDefault } from "../../styles/buttons";

export const DashEmpresas = () => {
  const { logout, editProfile } = useContext(UserContext);

  return (
    <>
      <DashboardHeader logout={logout} editProfile={editProfile} />
      <button onClick={logout}>Sair</button>
      <h1>Dash Empresas</h1>
      <JobCard>
        <ButtonDefault
          className="fullWidth"
          buttonSize="medium"
          buttonStyle="orange"
        >
          Editar
        </ButtonDefault>
        <ButtonDefault buttonSize="medium" buttonStyle="lightGrey">
          Excluir
        </ButtonDefault>
      </JobCard>
      <JobCard>
        <ButtonDefault
          className="fullWidth"
          buttonSize="medium"
          buttonStyle="yellow"
        >
          Aceitar entrega
        </ButtonDefault>
      </JobCard>
      <AsideCard />
    </>
  );
};
