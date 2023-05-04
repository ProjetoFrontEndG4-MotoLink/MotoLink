import { useContext } from "react";
import logoutIcon from "../../../assets/images/icon-logout-black.svg";
import { DropDownMenuTemplate } from "./DropDownMenuTemplate";
import { UserContext } from "../../../providers/UserContext";

export const DropDownMenu = () => {
  const { logout, setOpenModal, setOpenModalMoto } = useContext(UserContext);

  const openModais = () => {
    setOpenModal(true);
    setOpenModalMoto(true);
  };

  return (
    <DropDownMenuTemplate>
      <ul>
        <li onClick={() => openModais()}>Editar perfil</li>
        <li onClick={() => logout()}>
          <img src={logoutIcon} alt="logout icon" />
          Sair
        </li>
      </ul>
    </DropDownMenuTemplate>
  );
};
