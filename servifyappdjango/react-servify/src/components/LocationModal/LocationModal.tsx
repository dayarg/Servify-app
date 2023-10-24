import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Close from "../../assets/icons/close-icon.png";
import Avatar from "../Avatar/Avatar";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export type LocationModalProps = {
  title: string;
  label: string;
  isOpen: boolean;
  rating: number;
  onClose: () => void;
};

const LocationModal = ({
  title,
  label,
  rating,
  isOpen,
  onClose,
}: LocationModalProps) => {
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
          <div className="float-right my-2 mx-2">
            <button onClick={onClose}>
              <img src={Close} alt="close icon" />
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex items-center">
              <div>
                <Avatar
                  name={title}
                  size="w-10 h-10 md:w-20 md:h-20"
                  textSize="text-lg md:text-h1"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <h3
                  className="text-h5 leading-6 font-medium text-primary"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-body-m text-primary font-bold">{label}</p>
                </div>
                <div className="flex items-center mb-2 mt-2">
                  {[...Array(rating)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-yellow mr-1 w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
