import { JobListStyle } from "./JobsListStyle";

type JobListProps = {
  children: React.ReactNode;
};

export const JobListEmpresas = ({ children }: JobListProps) => {
  return <JobListStyle>{children}</JobListStyle>;
};
