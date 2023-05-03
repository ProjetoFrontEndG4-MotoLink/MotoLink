import { CardTemplate } from "./JobCardStyle";

interface ICardProp {
  children: React.ReactNode;
  callback: () => void;
}

export const JobCard = ({ children, callback }: ICardProp) => {
  return (
    <CardTemplate onClick={() => callback}>
      <h4>Entrega</h4>
      <div className="Card__Info--default">{children}</div>
    </CardTemplate>
  );
};
