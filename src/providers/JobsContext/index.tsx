import { createContext, useState } from "react";

interface IJobsContext{

}

interface IJobsProvider {
    children: React.ReactNode;
  }
export const JobsContext=createContext({}as IJobsContext)

export const JobsProvider=({children}:IJobsProvider)=>{

   


    return(


   <JobsContext.Provider value={{}}>
    {children}
   </JobsContext.Provider>
    )

}