/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceCardData, ServiceCardItem } from "../StartPage/models";
import BasicDrawerService from "../../components/Drawer/BasicDrawerService";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";
/* import { serviceDetails } from "./model"; */
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal";
import NoDisponible from "../../assets/img/no-disponible.jpg";

interface RouteParams {
  servicePath: string;
  [key: string]: string;
}

const ServiceDetail: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
  const [servicePerson, setServicePerson] = useState<string | null>(null);
  const { servicePath } = useParams<RouteParams>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState<
    {
      id: number;
      nombre_pro: string;
      apellido_pro: string;
      identificacion: string;
      fecha_nacimiento: string;
      profesion: string;
      correo: string;
      ciudad_recidencia: string;
      telefono: string;
    }[]
  >([]);

  const selectedService: ServiceCardItem | undefined =
    serviceCardData.items.find(
      (service: { link: string }) => service.link === `/servicio/${servicePath}`
    );

  if (!selectedService) {
    return <div>Servicio no encontrado</div>;
  }
  const { label, imageBanner } = selectedService;

  const handleOpenModal = (personId: number, serviceName: string) => {
    setSelectedPersonId(personId);
    setServicePerson(serviceName);
    console.log({serviceName, personId});
    
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/core/proveedores/resgister/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        // Acceder al arreglo "USERS" dentro de los datos recuperados del endpoint
        var users = data.users;

        for (var i = 0; i < users.length; i++) {
          setFetchedData(users);
        }
      })

      .catch((error) => {
        console.error("Ocurrió un error al hacer la solicitud:", error);
      });
  }, []);

  const profesiones = fetchedData.filter(
    (profesion) => profesion.profesion === selectedService.profession
  );

  return (
    <div className="h-screen flex flex-col">
      <BasicDrawerService label={label} onClick={() => navigate(-1)} />
      <div className="flex-1 flex flex-col w-full mt-20">
        <div className="flex">
          <div className="hidden md:block md:w-1/2">
            <img
              src={imageBanner}
              alt={label}
              className="w-screen max-h-screen border border-light-grey ml-4 rounded-lg"
            />
          </div>
          {profesiones.length > 0 ? (
            <div className="w-full md:w-1/2">
              <h3 className="font-bold text-lg ml-10 mb-2 text-primary-blue">
                Estos son los profesionales disponibles
              </h3>
              <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto">
                {Array.isArray(fetchedData) &&
                  fetchedData.length > 0 &&
                  fetchedData
                    .filter(
                      (detail) =>
                        detail.profesion === selectedService.profession
                    )
                    .map((detail, index) => {
                      return (
                        <div className="mb-4" key={index}>
                          <ProfessionalCard
                            nombre={detail.nombre_pro}
                            apellido={detail.apellido_pro}
                            horario={"Lunes a Viernes"}
                            hora={"8:00 AM - 3:00 PM"}
                            onclick={() => handleOpenModal(detail.id, detail.profesion)}
                          />
                        </div>
                      );
                    })}
                <ScheduleModal
                  isOpen={modalIsOpen}
                  onClose={handleCloseModal}
                  onClick={() => {}}
                />
              </div>
            </div>
          ) : (
            <div className=" w-full flex flex-col items-center justify-center py-12 h-screen px-8 py-3 mx-auto max-w-xl max-h-screen">
              <h1 className="text-deep-blue font-bold text-h5 text-center">
                ¡Ups! Lo sentimos, en el momento no contamos con profesionales
                disponibles
              </h1>
              <img
                src={NoDisponible}
                alt="profesional no disponible"
                className="w-96 h-80 mt-12"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
