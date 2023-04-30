import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { JobCard } from "../../components/JobCard/JobCard";
import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";

export const DashEmpresas = () => {
  const { logout } = useContext(UserContext);

  return (
    <>
      <button onClick={logout}>Sair</button>
      <h1>Dash Empresas</h1>
      <JobCard />
      <AsideCard />
    </>
  );
};
