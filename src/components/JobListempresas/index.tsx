import { useContext } from "react"
import { JobsContext } from "../../providers/JobsContext"
import { JobCard } from "../JobCard/JobCard"

export const JobListEmpresas=()=>{

    const {jobById}=useContext(JobsContext)

    return(
        <>


{jobById.length>0?  jobById.map((job) => {
            return <JobCard key={job.id} job={job}/>
        }):<h1> Você ainda não cadastrou nenhuma entrega </h1>}

       
        
        </>
    )

       

       
     
    
}