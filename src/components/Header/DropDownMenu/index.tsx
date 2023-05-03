import { useContext } from "react";
import logoutIcon from "../../../assets/images/icon-logout-black.svg";
import { DropDownMenuTemplate } from "./DropDownMenuTemplate";
import { UserContext } from "../../../providers/UserContext";

export const DropDownMenu = () => {
  const { logout, setOpenModal } = useContext(UserContext);

  return (
    <DropDownMenuTemplate>
      <ul>
        <li onClick={() => setOpenModal(true)}>Editar perfil</li>
        <li onClick={() => logout()}>
          <img src={logoutIcon} alt="logout icon" />
          Sair
        </li>
      </ul>
    </DropDownMenuTemplate>
  );
};
