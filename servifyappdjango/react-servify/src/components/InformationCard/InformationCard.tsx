import React from "react";
import Avatar from "../Avatar/Avatar";

export type InformationCardProps = {
  nombre: string;
  fecha: string;
  hora: string;
  direccion: string;
};

const InformationCard = ({
  nombre,
  fecha,
  hora,
  direccion,
}: InformationCardProps): JSX.Element => {
  return (
    <div className="border border-light-grey p-4 rounded-lg w-full flex items-center">
        <Avatar
          name={"Sandra Ayala"}
          size="w-20 h-20"
        />
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-bold mb-2">{nombre}</h2>
        <p className="text-gray-600 mb-1">Fecha: {fecha}</p>
        <p className="text-gray-600 mb-1">Hora: {hora}</p>
        <p className="text-gray-600 mb-1">Dirección: {direccion}</p>
      </div>
    </div>
  );
};

export default InformationCard;
