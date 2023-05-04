import { Footer } from "./Footer";
import { DashboardHeader } from "../Header/DashboardHeader";
import { ButtonDefault } from "../../styles/buttons";
import { MainStyle } from "./dashboardTemplate";
import { UserDashboardInfo } from "./UserDashboardInfo";
import { useContext } from "react";
import { JobsContext } from "../../providers/JobsContext";

interface IDashboardTemplateProps {
  buttonAddJob?: true;
  firstChildren: React.ReactNode;
  secondChildren: React.ReactNode;
}

export const DashboardTemplate = ({
  buttonAddJob,
  firstChildren,
  secondChildren,
}: IDashboardTemplateProps) => {
  const { setOpenModalAddJob } = useContext(JobsContext);

  return (
    <>
      <DashboardHeader />
      <MainStyle className="container">
        <div className="main__column1">
          <UserDashboardInfo />
          <div className="JobsListContainer">
            <div className="JobsListContainer__header">
              <h2>Entregas Publicadas</h2>
              {buttonAddJob ? (
                <ButtonDefault
                  buttonSize="medium"
                  buttonStyle="yellow"
                  onClick={() => setOpenModalAddJob(true)}
                >
                  Adicionar nova entrega
                </ButtonDefault>
              ) : null}
            </div>
            {firstChildren}
          </div>
        </div>
        <div className="main__column2">{secondChildren}</div>
      </MainStyle>
      <Footer />
    </>
  );
};
