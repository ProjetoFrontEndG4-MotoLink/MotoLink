import { Footer } from "./Footer";
import { DashboardHeader } from "../Header/DashboardHeader";
import { AsideCard } from "./AsideJobsContainer/AsideCards/AsideCard";
import { ButtonDefault } from "../../styles/buttons";
import { MainStyle } from "./dashboardTemplate";
import { UserDashboardInfo } from "./UserDashboardInfo";
import { useContext } from "react";
import { JobsContext } from "../../providers/JobsContext";
import { AsideContainer } from "./AsideJobsContainer";

interface IDashboardTemplateProps {
  buttonAddJob?: true;
  children: React.ReactNode;
}

export const DashboardTemplate = ({
  buttonAddJob,
  children,
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
            {children}
          </div>
        </div>
        {/* <div className="main__column2">
          <AsideContainer>
            <AsideCard />
            <AsideCard />
            <AsideCard />
          </AsideContainer>
        </div> */}
      </MainStyle>
      <Footer />
    </>
  );
};
