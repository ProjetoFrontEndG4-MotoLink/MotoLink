import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { IAddNewJob } from "../../Pages/DashBoardEmpresa/ModalAddNewJobs";
import { IUpJob } from "../../Pages/DashBoardEmpresa/ModalUpdateJobs";
import { toast } from "react-toastify";

import { UserContext } from "../UserContext";

interface IJobsContext {
  setOpenModalAddJob: React.Dispatch<React.SetStateAction<boolean>>;
  addNewJob: (formData: IAddNewJob) => Promise<void>;
  deleteJob: (id: number) => Promise<void>;
  setOpenModalUpJob: React.Dispatch<React.SetStateAction<boolean>>;
  updateJob: (formData: IUpJob) => Promise<void>;
  setCurrentJob: React.Dispatch<React.SetStateAction<IJobs | null>>;
  acceptJob: (id: number) => Promise<void>;
  openModalAddJob: boolean;
  jobById: IJobs[];
  jobsList: IJobs[];
  openModalUpJob: boolean;
  currentJob: IJobs | null;
  jobsNotAccept: IJobs[];
  jobsAccept: IJobs[];
}

interface IJobsProvider {
  children: React.ReactNode;
}

export interface IJobs {
  jobs: string;
  name: string;
  companyId: number | string;
  partners: string;
  id: number;
  idUser: number;
  status: boolean;
  local: string;
  price: number;
}

export const JobsContext = createContext({} as IJobsContext);

export const JobsProvider = ({ children }: IJobsProvider) => {
  const [jobsList, setJobsList] = useState<IJobs[]>([]);
  const [jobById, setJobById] = useState<IJobs[]>([]);
  const [jobsAccept, setJobsAccept] = useState<IJobs[]>([]);
  const [jobsNotAccept, setJobsNotAccept] = useState<IJobs[]>([]);
  const [openModalAddJob, setOpenModalAddJob] = useState(false);
  const [openModalUpJob, setOpenModalUpJob] = useState(false);
  const [currentJob, setCurrentJob] = useState<IJobs | null>(null);
  const { user } = useContext(UserContext);

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
      } catch (error) {
        toast.error("Ops... Algo deu errado, tente novamente!");
      }
    };
    getAllJobs();
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("@USERID");

    const jobEmpresa = jobsList.filter((job) => {
      return job.companyId == id;
    });

    const jobNotAccept = jobsList.filter((job) => {
      return job.status == true;
    });

    setJobsNotAccept(jobNotAccept);
    setJobById(jobEmpresa);
  }, [jobsList]);

  const addNewJob = async (formData: IAddNewJob) => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    try {
      const response = await Api.post(
        "/jobs",
        {
          local: formData.local,
          companyId: Number(id),
          price: formData.price,
          status: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setJobsList([...jobsList, response.data]);
      toast.success("Entrega publicada com sucesso!");
    } catch (error) {
      toast.error("Ops... Algo deu errado, tente novamente!");
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

      const newJobList = jobsList.filter((job) => job.id !== id);

      toast.success("Entrega deletada com sucesso!");
      setJobsList([...newJobList]);
    } catch (error) {
      toast.error("Ops... Algo deu errado, tente novamente!");
    }
  };
  console.log(jobsList);

  const updateJob = async (formData: IUpJob) => {
    const token = localStorage.getItem("@TOKEN");
    const id = currentJob?.id;

    try {
      const response = await Api.patch(`/jobs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newJobList = jobsList.filter((job) => {
        return job.id !== id;
      });

      toast.success("Entrega modificada com sucesso!");
      setJobsList([...newJobList, response.data]);
    } catch (error) {
      toast.error("Ops... Algo deu errado, tente novamente!");
    } finally {
      setOpenModalUpJob(false);
    }
  };

  const acceptJob = async (id: number) => {
    const token = localStorage.getItem("@TOKEN");
    const user_id = localStorage.getItem("@USERID");
  
    try {
      const response = await Api.patch(
        `/jobs/${id}`,
        { idUser: user_id, status: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const updatedJob = response.data;
      const updatedJobsList = jobsList.map((job) => {
        if (job.id === updatedJob.id) {
          return updatedJob;
        } else {
          return job;
        }
      });
  
      const newJobsAcceptList = [...jobsAccept, updatedJob];
  
      setJobsList(updatedJobsList);
      setJobsAccept(newJobsAcceptList);
  
      toast.success("Entrega aceita com sucesso!");
    } catch (error) {
      toast.error("Ops... Algo deu errado, tente novamente!");
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
        acceptJob,
        jobsNotAccept,
        jobsAccept,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
