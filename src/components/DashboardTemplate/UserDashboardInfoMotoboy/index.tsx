import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { UserDashboardMotoboy } from "./style";
import { JobsContext } from "../../../providers/JobsContext";

export const UserDashboardInfoMotoboy = () => {
  const { user } = useContext(UserContext);
  const { priceTotal } = useContext(JobsContext);

  return (
    <UserDashboardMotoboy>
      <div className="UserInfoDetails--name">
        <h1>{user?.name}</h1>
        <h2>
          {`${priceTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}`}{" "}
        </h2>
      </div>
      <div className="UserInfoDetails">
        <h3>Email: {user?.email}</h3>
        <h3>Telefone: {user?.telefone}</h3>
      </div>
    </UserDashboardMotoboy>
  );
};
