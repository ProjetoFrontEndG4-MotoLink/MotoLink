import { AsideStyle } from "./AsideStyle";

type JobAsideProps = {
  children: React.ReactNode;
};

export const AsideContainer = ({ children }: JobAsideProps) => {

  return <AsideStyle>{children}</AsideStyle>;
  
};
