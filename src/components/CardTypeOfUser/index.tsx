import { TypeOfUserCard } from "./buttonStyle";

interface CardTypeOfUserProps {
  img: string;
  children: string;
  callback?: () => void;
}

export const CardTypeOfUser = ({
  children,
  callback,
  img,
}: CardTypeOfUserProps) => {
  return (
    <TypeOfUserCard onClick={callback}>
      <img src={img} alt="" />
      <p className="textCard">{children}</p>
    </TypeOfUserCard>
  );
};
