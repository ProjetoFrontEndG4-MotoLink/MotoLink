import { useContext } from "react";
import { IJobs, JobsContext } from "../../providers/JobsContext";
import { CardTemplate } from "./JobCardStyle";
import { joiResolver } from "@hookform/resolvers/joi";


interface ICardProp{
  job:IJobs
}

export const JobCard = ({job}:ICardProp) => {

  const{deleteJob,setOpenModalUpJob,setCurrentJob}=useContext(JobsContext)
  return (
    <CardTemplate onClick={()=>setCurrentJob(job)}>
      <h4>Entrega</h4>
      <div className="Card__Info--default">
        <div className="Card__Info__Detail">
          <h5>Local Da Entrega</h5>
          <p>{job.local}</p>
        </div>
        <div className="Card__Info__Detail">
          <h5>Taxa/entrega</h5>
          <p>{`R$:${job.price}`}</p>
        </div>

        <div className="interactionButtonsContainer">{children}</div>

        <button onClick={()=>setOpenModalUpJob(true)}>Editar</button>
        <button onClick={()=>deleteJob(job.id)}>Excluir</button>

      </div>
    </CardTemplate>
  );
};
