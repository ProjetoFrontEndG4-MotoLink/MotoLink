import { DashboardHeaderStyle } from "./DashboardHeaderStyle";
import logo from "../../assets/images/logo-black.svg";
import logoutIcon from "../../assets/images/icon-logout.svg";
import { ButtonDefault } from "../../styles/buttons";
import { useContext} from "react";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";



export const DashboardHeader = () => {
  const{logout,setOpenModal}=useContext(UserContext)


  return (
    <DashboardHeaderStyle>
      <img src={logo} alt="logo motolink" />
      <div className="buttonsContainer">
        <ButtonDefault
          onClick={()=>setOpenModal(true)}
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
