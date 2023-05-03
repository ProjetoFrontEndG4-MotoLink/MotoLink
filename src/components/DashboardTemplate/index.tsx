import { Footer } from "../Footer";
import { DashboardHeader } from "../Header/DashboardHeader";
import { AsideCard } from "../JobCard/AsideCards/AsideCard";
import { ButtonDefault } from "../../styles/buttons";
import { MainStyle } from "./dashboardTemplate";
import { UserDashboardInfo } from "./UserDashboardInfo";

interface IDashboardTemplateProps {
  callback: () => void;
  children: React.ReactNode;
}

export const DashboardTemplate = ({
  callback,
  children,
}: IDashboardTemplateProps) => {
  return (
    <>
      <DashboardHeader />
      <MainStyle className="container">
        <div className="main__column1">
          <UserDashboardInfo />
          <div className="JobsListContainer">
            <div className="JobsListContainer__header">
              <h2>Entregas Publicadas</h2>
              <ButtonDefault
                buttonSize="medium"
                buttonStyle="yellow"
                onClick={() => callback}
              >
                Adicionar nova entrega
              </ButtonDefault>
            </div>
            {children}
          </div>
        </div>
        <div className="main__column2">
          <AsideCard />
        </div>
      </MainStyle>
      <Footer />
    </>
  );
};
