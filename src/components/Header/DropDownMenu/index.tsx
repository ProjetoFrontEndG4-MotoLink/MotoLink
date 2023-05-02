import logoutIcon from "../../../assets/images/icon-logout-black.svg";
import { DropDownMenuTemplate } from "./DropDownMenuTemplate";

export const DropDownMenu = () => {
  return (
    <DropDownMenuTemplate>
      <ul>
        <li>Editar perfil</li>
        <li>
          <img src={logoutIcon} alt="logout icon" />
          Sair
        </li>
      </ul>
    </DropDownMenuTemplate>
  );
};
