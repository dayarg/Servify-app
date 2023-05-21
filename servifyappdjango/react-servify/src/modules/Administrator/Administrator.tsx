    import React, { useState } from "react";
    import { peopleRegister, peopleService } from "./model";
    import Drawer from "../../components/Drawer/Drawer";
    import InformationCard from "../../components/InformationCard/InformationCard";
    import ModalAccept from "../../components/ModalAccept/ModalAccept";
    import NewUserCard from "../../components/NewUserCard/NewUserCard";


    const Administrator = (): JSX.Element => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="h-screen flex flex-col">
        <Drawer userName={''} />
        <div className="flex-1 flex flex-col w-full mt-10">
            <div className="flex-none md:flex">
            <div className="md:block md:w-1/2 mt-4">
                <h3 className="font-bold text-lg ml-10 mb-2 text-primary">
                Últimos servicios solicitados
                </h3>
                <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto rounded-lg">
                {peopleService &&
                    peopleService.length > 0 &&
                    peopleService.map((person, index) => (
                    <div className="mb-4">
                        <InformationCard
                        key={index} // Agrega una clave única para cada elemento
                        nombre={person.nombre}
                        fecha={person.fecha}
                        hora={person.hora}
                        direccion={person.direccion}
                        onClick={handleOpenModal}
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-4">
                <h3 className="font-bold text-lg ml-10 mb-2 text-primary">
                Solicitudes de ingreso
                </h3>
                <div className="w-full h-screen px-8 py-3 mx-auto max-w-xl max-h-screen md:bg-scroll md:overflow-auto bg-light-grey rounded-lg">
                {peopleRegister &&
                    peopleRegister.length > 0 &&
                    peopleRegister.map((person, index) => (
                    <div className="mb-4">
                        <NewUserCard
                        key={index}
                        nombre={person.nombre}
                        profesion={person.profesion}
                        experiencia={person.experiencia}
                        descripcion={person.descripcion}
                        onClick={handleOpenModal}
                        />
                    </div>
                    ))}
                <ModalAccept
                    title={"¿Desea aceptar este proveedor?"}
                    label={
                    "Verifica el perfil del proveedor para aceptar o rechazar su inscripción"
                    }
                    btnAccept={"Aceptar"}
                    btnCancel={"Rechazar"}
                    isOpen={modalIsOpen}
                    onClose={handleCloseModal}
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Administrator;
