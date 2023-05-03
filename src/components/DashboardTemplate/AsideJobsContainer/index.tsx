import { AsideStyle } from "./AsideStyle";

type AsideProps = {
  children: React.ReactNode;
};

export const AsideContainer = ({ children }: AsideProps) => {
  return (
    <AsideStyle>
      <h3>Entregas aceitas</h3>
      <ul>{children}</ul>
    </AsideStyle>
  );
};
