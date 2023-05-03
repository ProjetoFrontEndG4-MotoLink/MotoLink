import { useContext } from "react";
import { UserDashboard } from "./UserDashboardInfoTemplate";
import { UserContext } from "../../../providers/UserContext";

export const UserDashboardInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <UserDashboard>
      <h1>{user?.name}</h1>
      <div className="UserInfoDetails">
        <h3>Setor: {user?.setor}</h3>
        <h3>Telefone: {user?.telefone}</h3>
        <h3>E-mail: {user?.email}</h3>
      </div>
    </UserDashboard>
  );
};
