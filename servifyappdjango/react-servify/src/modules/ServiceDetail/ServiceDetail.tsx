import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { serviceCardData, ServiceCardItem } from "../StartPage/models";
import BasicDrawerService from "../../components/Drawer/BasicDrawerService";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";
import { serviceDetails } from "./model";
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal";

interface RouteParams {
  servicePath: string;
  [key: string]: string;
}

const ServiceDetail: React.FC = () => {
  const { servicePath } = useParams<RouteParams>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const selectedService: ServiceCardItem | undefined =
    serviceCardData.items.find(
      (service: { link: string }) => service.link === `/servicio/${servicePath}`
    );

  if (!selectedService) {
    return <div>Servicio no encontrado</div>;
  }
  const { label, imageBanner } = selectedService;

  const detailsList =
    servicePath && serviceDetails.hasOwnProperty(servicePath)
      ? serviceDetails[servicePath as keyof typeof serviceDetails]
      : [];

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <BasicDrawerService label={label} />
      <div className="flex-1 flex flex-col w-full mt-20">
        <div className="flex">
          <div className="hidden md:block md:w-1/2">
            <img
              src={imageBanner}
              alt={label}
              className="w-screen max-h-screen border border-light-grey ml-4 rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-bold text-lg ml-10 mb-2">
              Estos son los profesionales disponibles
            </h3>
            <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto">
              {detailsList.map((detail, index) => (
                <div className="mb-4">
                  <ProfessionalCard
                    nombre={typeof detail === "object" ? detail.name : detail}
                    horario={
                      typeof detail === "object" ? detail.horario : detail
                    }
                    hora={typeof detail === "object" ? detail.hora : detail}
                    key={index}
                    onclick={handleOpenModal}
                  />
                </div>
              ))}
              <ScheduleModal isOpen={modalIsOpen} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
