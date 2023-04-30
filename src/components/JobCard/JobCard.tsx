import { CardTemplate } from "./JobCardStyle";

interface JobCardProps {
  children: React.ReactNode;
}

export const JobCard = ({ children }: JobCardProps) => {
  return (
    <CardTemplate>
      <h4>Entrega</h4>
      <div className="Card__Info--default">
        <div className="Card__Info__Detail">
          <h5>Local da Entrega</h5>
          <p>Rua Lorem Ipsum, LI - Lorem</p>
        </div>
        <div className="Card__Info__Detail">
          <h5>Taxa/entrega</h5>
          <p>R$00,00</p>
        </div>
        <div className="interactionButtonsContainer">{children}</div>
      </div>
    </CardTemplate>
  );
};
