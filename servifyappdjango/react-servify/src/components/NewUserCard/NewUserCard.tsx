import React from "react";
import Avatar from "../Avatar/Avatar";

export type InformationCardProps = {
  nombre: string;
  profesion: string;
  experiencia: number;
  descripcion: string;
  onClick?: () => void;
};

const NewUserCard = ({
  nombre,
  profesion,
  experiencia,
  descripcion,
  onClick,
}: InformationCardProps): JSX.Element => {
  return (
    <button
      className="border border-light-grey bg-white p-4 rounded-lg w-full flex items-center text-left"
      onClick={onClick}
    >
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-bold mb-2 text-secondary">{nombre}</h2>
        <p className="text-primary mb-1">Profesión: {profesion}</p>
        <p className="text-primary mb-1 "> {`Experiencia: ${experiencia} años`}</p>
        <p className="text-primary mb-1 overflow-hidden line-clamp-2">{descripcion}</p>
      </div>
      <Avatar name={"Sandra Ayala"} size="w-20 h-20" textSize="text-h1" />
    </button>
  );
};

export default NewUserCard;
