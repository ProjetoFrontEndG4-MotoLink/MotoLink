import { DashboardHeaderStyle } from "./DashboardHeaderStyle";
import logo from "../../assets/images/logo-black.svg";
import logoutIcon from "../../assets/images/icon-logout.svg";
import { ButtonDefault } from "../../styles/buttons";

interface DashboardHeaderProps {
  logout: () => void;
  editProfile: () => void;
}

export const DashboardHeader = ({
  logout,
  editProfile,
}: DashboardHeaderProps) => {
  return (
    <DashboardHeaderStyle>
      <img src={logo} alt="logo motolink" />
      <div className="buttonsContainer">
        <ButtonDefault
          onClick={editProfile}
          buttonSize="medium"
          buttonStyle="orange"
        >
          Editar Perfil
        </ButtonDefault>
        <ButtonDefault onClick={logout} buttonSize="medium" buttonStyle="grey">
          <img src={logoutIcon} alt="ícone de logout" /> Sair
        </ButtonDefault>
      </div>
    </DashboardHeaderStyle>
  );
};
