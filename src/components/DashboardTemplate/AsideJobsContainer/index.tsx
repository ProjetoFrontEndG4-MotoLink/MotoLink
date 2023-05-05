import { AsideStyle } from "./AsideStyle";

type JobAsideProps = {
  children: React.ReactNode;
};

export const AsideContainer = ({ children }: JobAsideProps) => {
  return (
    <AsideStyle>
      <h3>Entregas aceitas</h3>
      <ul>{children}</ul>
    </AsideStyle>
  );
};
