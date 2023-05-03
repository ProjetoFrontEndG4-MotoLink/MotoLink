import { JobListStyle } from "./JobsListStyle";

type JobListProps = {
  children: React.ReactNode;
};

export const JobList = ({ children }: JobListProps) => {
  return <JobListStyle>{children}</JobListStyle>;
};
