import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { IAddNewJob } from "../../Pages/DashBoardEmpresa/ModalAddNewJobs";
import { IUpJob } from "../../Pages/DashBoardEmpresa/ModalUpdateJobs";
import { toast } from "react-toastify";

interface IJobsContext {
  setOpenModalAddJob: React.Dispatch<React.SetStateAction<boolean>>;
  openModalAddJob: boolean;
  addNewJob: (formData: IAddNewJob) => Promise<void>;
  jobById: IJobs[];
  jobsList: IJobs[];
  deleteJob: (id: number) => Promise<void>;
  setOpenModalUpJob: React.Dispatch<React.SetStateAction<boolean>>;
  openModalUpJob: boolean;
  updateJob: (formData: IUpJob) => Promise<void>;
  setCurrentJob: React.Dispatch<React.SetStateAction<IJobs | null>>;
  currentJob: IJobs | null;
}

interface IJobsProvider {
  children: React.ReactNode;
}

export interface IJobs {
  name: string;
  companyId: number | string;
  partners: string;
  id: number;
  status: boolean;
  local: string;
  price: number;
}

export const JobsContext = createContext({} as IJobsContext);

export const JobsProvider = ({ children }: IJobsProvider) => {
  const [jobsList, setJobsList] = useState<IJobs[]>([]);
  const [jobById, setJobById] = useState<IJobs[]>([]);
  const [openModalAddJob, setOpenModalAddJob] = useState(false);
  const [openModalUpJob, setOpenModalUpJob] = useState(false);
  const [currentJob, setCurrentJob] = useState<IJobs | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const getAllJobs = async () => {
      try {
        const response = await Api.get("/jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setJobsList(response.data);

        const jobEmpresa = jobsList.filter((job) => {
          return job.companyId == id;
        });

        setJobById(jobEmpresa);
      } catch (error) {
        console.log(error);
      }
    };
    getAllJobs();
  }, [jobsList]);

  const addNewJob = async (formData: IAddNewJob) => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    try {
      const response = await Api.post(
        "/jobs",
        { local: formData.local, companyId: Number(id), price: formData.price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      toast.success("Entrega publicada com sucesso!")
      setJobsList([...jobsList, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Ops... Algo deu errado, tente novamente!")
    } finally {
      setOpenModalAddJob(false);
    }
  };

  const deleteJob = async (id: number) => {
    const token = localStorage.getItem("@TOKEN");
    const companyid = localStorage.getItem("@USERID");

    try {
      await Api.delete(`/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newJobList = jobsList.filter((job) => {
        return job.id !== Number(companyid);
      });

      toast.success("Entrega deletada com sucesso!")
      setJobsList(newJobList);
    } catch (error) {
      console.log(error);
      toast.error("Ops... Algo deu errado, tente novamente!")
    }
  };

  const updateJob = async (formData: IUpJob) => {
    const token = localStorage.getItem("@TOKEN");

    const id = currentJob?.id;
    console.log(currentJob)

    try {
      const response = await Api.patch(`/jobs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newJobList = jobsList.filter((job) => {
        return job.id !== id;
      });

      toast.success("Entrega modificada com sucesso!")
      setJobsList([...newJobList, response.data]);
    } catch (error) {
      console.log(error);
      toast.error("Ops... Algo deu errado, tente novamente!")
    } finally {
      setOpenModalUpJob(false);
    }
  };

  return (
    <JobsContext.Provider
      value={{
        setOpenModalAddJob,
        openModalAddJob,
        addNewJob,
        jobById,
        jobsList,
        deleteJob,
        setOpenModalUpJob,
        openModalUpJob,
        updateJob,
        currentJob,
        setCurrentJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
