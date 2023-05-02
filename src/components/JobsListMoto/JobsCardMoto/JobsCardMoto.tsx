import { IJobs } from "../../../providers/JobsContext";

interface ICardProp {
	job: IJobs;
}


export const JobsCardMoto = ({job }: ICardProp) => {

  return (
    <div>
        <div>
            <h1>{job.companyId}</h1>
        </div>
        <div>
            <p>{`Local de Entrega: ${job.local}`}</p>
            <p>{`Taxa de Entrega: ${job.price}`}</p>
        </div>
        <div>
            <button>Aceitar Entrega</button>
        </div>
    </div>
  )
}
