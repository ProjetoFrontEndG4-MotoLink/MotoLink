import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { JobCard } from "../../components/JobCard/JobCard";
import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";
import { DashboardHeader } from "../../components/Header/DashboardHeader";

export const DashEmpresas = () => {
  const { logout, editProfile } = useContext(UserContext);

  return (
    <>
      <DashboardHeader logout={logout} editProfile={editProfile} />
      <button onClick={logout}>Sair</button>
      <h1>Dash Empresas</h1>
      <JobCard />
      <AsideCard />
    </>
  );
};
