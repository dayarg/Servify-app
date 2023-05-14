import React from "react";
import Avatar from "../Avatar/Avatar";

export type ProfessionalCardProps = {
  nombre: string;
  horario: string;
  hora: string;
};

const ProfessionalCard = ({
  nombre,
  horario,
  hora,
}: ProfessionalCardProps): JSX.Element => {
  return (
    <div className="border border-light-grey p-4 rounded-lg w-full flex items-center">
        <Avatar
          name={nombre}
          size="w-20 h-20"
        />
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-bold mb-1">{nombre}</h2>
        <span className="text-regular-grey mb-2">DISPONIBILIDAD:</span>
        <p className="text-primary mb-1">Horario: {horario}</p>
        <p className="text-primary mb-1">Hora: {hora}</p>
      </div>
    </div>
  );
};

export default ProfessionalCard;
