import Avatar from "../Avatar/Avatar";

export type ProfessionalCardProps = {
  nombre: string;
  apellido: string;
  horario: string;
  hora: string;
  key?: number;
  onclick?: () => void;
};

const ProfessionalCard = ({
  nombre,
  apellido,
  horario,
  hora,
  key,
  onclick,
}: ProfessionalCardProps): JSX.Element => {
  return (
    <button
      className="border border-light-grey p-4 rounded-lg w-full flex items-center text-left"
      key={key}
      onClick={onclick}
    >
      <Avatar
        name={nombre}
        size="w-10 h-10 md:w-20 md:h-20"
        textSize="text-lg md:text-h1"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-bold mb-1">{nombre} {apellido}</h2>
        <span className="text-regular-grey mb-2">DISPONIBILIDAD:</span>
        <p className="text-primary mb-1">Horario: {horario}</p>
        <p className="text-primary mb-1">Hora: {hora}</p>
      </div>
    </button>
  );
};

export default ProfessionalCard;
