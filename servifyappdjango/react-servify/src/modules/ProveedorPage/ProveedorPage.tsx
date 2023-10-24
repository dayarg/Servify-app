import React, { useEffect, useState } from "react";
import { peopleService, peopleCalification } from "./model";
import Drawer from "../../components/Drawer/Drawer";
import InformationCard from "../../components/InformationCard/InformationCard";
import CalificationCard from "../../components/CalificationCard/CalificationCard";
import ModalAccept from "../../components/ModalAccept/ModalAccept";
import { useLocation } from "react-router-dom";

const ProveedorPage: React.FC = () => {
  const location = useLocation();
  const userName = location.state?.userName || "";
  const userId = location.state?.userId || "";
  const message = location.state?.message || "";

  const saveLoginDataToLocalStorage = (data: any) => {
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  useEffect(() => {
    const loginData = {
      message: message,
      user: userName,
      id: userId,
    };

    saveLoginDataToLocalStorage(loginData);
  }, [userName, userId, message]);

  const storedLoginDataJSON = localStorage.getItem("loginData");
  const storedLoginData = storedLoginDataJSON
    ? JSON.parse(storedLoginDataJSON)
    : {};
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <Drawer userName={storedLoginData.user} />
      <div className="flex-1 flex flex-col w-full mt-20">
        <div className="flex-none md:flex">
          <div className="md:block md:w-1/2">
            <h3 className="font-bold text-lg ml-10 mb-2">
              Estas personas necesitan tu servicio
            </h3>
            <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto">
              {peopleService &&
                peopleService.length > 0 &&
                peopleService.map((person, index) => (
                  <div className="mb-4" key={`service-${index}`}>
                    <InformationCard
                      key={person.id} // Agrega una clave única para cada elemento
                      nombre={person.nombre}
                      fecha={person.fecha}
                      hora={person.hora}
                      direccion={person.direccion}
                      onClick={handleOpenModal}
                    />
                  </div>
                ))}
              <ModalAccept
                isOpen={modalIsOpen}
                onClose={handleCloseModal}
                title={"¿Quieres aceptar el servicio?"}
                label={
                  "Recuerda que entre más servicios aceptes, mejores oportunidades tendrás de mejorar tus ganancias."
                }
                btnAccept={"Aceptar"}
                btnCancel={"Rechazar"}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4">
            <h3 className="font-bold text-lg ml-10 mb-2">
              Calificaciones de tus servicios
            </h3>
            <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto">
              {peopleCalification &&
                peopleCalification.length > 0 &&
                peopleCalification.map((person, index) => (
                  <div className="mb-4" key={`calification-${index}`}>
                    <CalificationCard
                      key={person.id} // Agrega una clave única para cada elemento
                      userName={person.nombre}
                      rating={person.calificacion}
                      comment={person.opinion}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProveedorPage;
