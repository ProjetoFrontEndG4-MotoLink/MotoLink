import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { IAddNewJob } from "../../components/ModalAddNewJobs";
import { IUpJob } from "../../components/ModalUpdateJobs";

interface IJobsContext{
    setOpenModalAddJob: React.Dispatch<React.SetStateAction<boolean>>
    openModalAddJob:boolean
    addNewJob: (formData: IAddNewJob) => Promise<void>
    jobById: IJobs[]
    jobsList:IJobs[]
    deleteJob: (id:number) => Promise<void>
    setOpenModalUpJob: React.Dispatch<React.SetStateAction<boolean>>
    openModalUpJob:boolean
    updateJob: (formData: IUpJob) => Promise<void>
    setCurrentJob: React.Dispatch<React.SetStateAction<IJobs | null>>
    currentJob: IJobs | null
}

interface IJobsProvider {
    children: React.ReactNode;
  }

export interface IJobs{
    name:string
    companyId:number|string
    partners:string
    id:number
    status:boolean
    local:string
    price:number

}



export const JobsContext=createContext({}as IJobsContext)

export const JobsProvider=({children}:IJobsProvider)=>{

   const[jobsList,setJobsList]=useState<IJobs[]>([])
    const [jobById,setJobById]=useState<IJobs[]>([])
   const [openModalAddJob,setOpenModalAddJob]=useState(false)
   const [openModalUpJob,setOpenModalUpJob]=useState(false)
   const[currentJob,setCurrentJob]=useState<IJobs|null>(null)

   

   useEffect(()=>{
    const token = localStorage.getItem("@TOKEN");
    const id =localStorage.getItem("@USERID")

    const getAllJobs=async()=>{
        
        try {
            const response= await Api.get("/jobs",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
    
            setJobsList(response.data)

            const jobEmpresa=jobsList.filter(job=>{
                return job.companyId == id
            })
    
            setJobById(jobEmpresa)
            
        } catch (error) {
            console.log(error)
        }
    
       }
getAllJobs()



   },[jobById])


   const addNewJob=async(formData:IAddNewJob)=>{
   
    const token = localStorage.getItem("@TOKEN");
    const id =localStorage.getItem("@USERID")
      try {
        const response=await Api.post("/jobs",{local:formData.local,companyId:Number(id),price:formData.price},{
            headers:{
                Authorization: `Bearer ${token}`
                }
            
        })

       setJobsList([...jobsList,response.data])
       
        
    } catch (error) {
        console.log(error)
    }finally{
        setOpenModalAddJob(false)
    }

   }

   const deleteJob=async(id:number)=>{

    const token = localStorage.getItem("@TOKEN");
    const companyid =localStorage.getItem("@USERID")

    try {

        const response=await Api.delete(`/jobs/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`

            }
        })

        const newJobList=jobsList.filter((job)=>{
            return job.id !== Number(companyid)

        })

        setJobsList(newJobList)
        
    } catch (error) {
        console.log(error)
    }
   }

   const updateJob=async(formData:IUpJob)=>{

    const token = localStorage.getItem("@TOKEN");


    const id= currentJob?.id

    try {
        
        const response=await Api.patch(`/jobs/${id}`,formData,{
            headers:{
                Authorization:`Bearer ${token}`

            }
        
        })

        const newJobList=jobsList.filter((job)=>{
            return job.id !== id 
        })

        setJobsList([...newJobList,response.data])
    } catch (error) {
        console.log(error)
    }
    finally{
        setOpenModalUpJob(false)
    }

   }
  
   

    return(


   <JobsContext.Provider value={{setOpenModalAddJob,openModalAddJob,addNewJob,jobById,jobsList,deleteJob, setOpenModalUpJob, openModalUpJob, updateJob,currentJob,setCurrentJob}}>
    {children}
   </JobsContext.Provider>
    )

}