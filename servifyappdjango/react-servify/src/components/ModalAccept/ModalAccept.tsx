import React from "react";
import Button from "../Button/Button";

export type ModalAcceptProps = {
  title: string;
  label: string;
  btnAccept: string;
  btnCancel: string;
  isOpen: boolean;
  onClose: () => void;
};

const ModalAccept = ({ title, label, btnAccept, btnCancel, isOpen, onClose }: ModalAcceptProps) => {
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
              <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                <h3
                  className="text-h5 leading-6 font-medium text-primary"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-lg text-primary">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light-grey px-4 py-3 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-2.5 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button
                id={"btnAccept"}
                onClick={onClose}
                theme="primary"
                type="submit"
              >
                {btnAccept}
              </Button>
              <Button id={"btnDiscard"} onClick={onClose} theme="secondary">
                {btnCancel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAccept;
