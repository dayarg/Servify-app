import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import DateInput from "../DateInput/DateInput";
import TimeInput from "../TimeInput/TimeInput";
import Textarea from "../Textarea/Textarea";

export type ScheduleModalProps = {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  disabled?: boolean;
};

const ScheduleModal = ({ isOpen, onClose, onClick, disabled }: ScheduleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-regular-grey opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex">
              <div className="mt-3 sm:mt-0 sm:ml-4 align-center justify-center">
                <h3
                  className="text-h4 leading-6 font-medium text-primary mb-5 text-center"
                  id="modal-headline"
                >
                  Agenda el servicio
                </h3>
                <div className="mt-2 flex flex-wrap">
                  <div className="w-full ">
                    <Input
                      label={"Correo electrónico"}
                      type={"text"}
                      placeholder={"Ingresa tu correo electrónico"}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pr-2">
                    <Input
                      label={"Nombre"}
                      type={"text"}
                      placeholder={"Ingresa tu nombre"}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 ">
                    <Input
                      label={"Apellido"}
                      type={"text"}
                      placeholder={"Ingresa tu nombre"}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 sm:pr-2">
                    <TimeInput
                      label={"Hora"}
                      placeholder={"Hora del servicio"}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 ">
                    <DateInput
                      label={"Fecha"}
                      placeholder={"Fecha del servicio"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:pl-3">
              <Textarea
                label={"Describe el servicio que necesitas"}
                placeholder={"Deja tu descripción aquí"}
              />
            </div>
          </div>

          <div className="bg-light-grey px-4 py-3 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-2.5 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button
                id={"btnAccept"}
                onClick={onClick}
                theme="primary"
                type="submit"
                disabled={disabled}
              >
                Agendar
              </Button>
              <Button id={"btnDiscard"} onClick={onClose} theme="secondary">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
