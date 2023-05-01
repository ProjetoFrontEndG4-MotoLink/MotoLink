import { useContext, useState } from "react";

import { JobCard } from "../../components/JobCard/JobCard";
import { AsideCard } from "../../components/JobCard/AsideCards/AsideCard";
import { DashboardHeader } from "../../components/Header/DashboardHeader";
import { UpdateModalEmpresas } from "../../components/UpdateModalEmpresas";
import { JobsContext } from "../../providers/JobsContext";
import { UserContext } from "../../providers/UserContext";




export const DashEmpresas = () => {
 
  
 const {user,openModal}=useContext(UserContext)
  
  return (
    <>
      <DashboardHeader />
      <div>

        <h1>{user?.name}</h1>
        <h3>Setor:{user?.setor}</h3>
        <h3>Telefone:{user?.telefone}</h3>
        <h3>E-mail:{user?.email}</h3>
      </div>
      
     {openModal? <UpdateModalEmpresas/>:null}
      
      <JobCard />
      <AsideCard />
    </>
  );
};
