import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export type PresentationCardProps = {
  nombre: string;
  description: string;
  calification: number;
};

const PresentationCard = ({
  nombre,
  description,
  calification,
}: PresentationCardProps): JSX.Element => {
  return (
    <div className="border border-light-grey p-4 rounded-lg w-full flex items-center">
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-bold mb-1">{nombre}</h2>
        <span className="text-regular-grey my-3">{description}</span>
        <div className="flex items-center mb-2">
          <span className="text-primary my-3 mr-2">Calificación: </span>
          {[...Array(calification)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-yellow mr-1"
            />
          ))}
        </div>
        <div className="my-3">
          <Button id={"btnSolicitar"} type="submit" theme="primary">
            Solicitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
