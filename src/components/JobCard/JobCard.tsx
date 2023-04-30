import { CardTemplate } from "./JobCardStyle";

export const JobCard = () => {
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
      </div>
    </CardTemplate>
  );
};
