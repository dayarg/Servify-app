import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faQuestionCircle,
  faEnvelope,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/img/logo.png';
import Avatar from "../Avatar/Avatar";

export type DrawerProps = {
  userName: string;
};

const Drawer = ({ userName }: DrawerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAvatarMenu = () => {
    setIsAvatarOpen(!isAvatarOpen);
  };

  return (
    <div className="relative w-full h-12">
      <div className="flex items-center justify-between py-4 px-6 bg-white">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-28 h-14" />
        </div>
        <div className="relative">
          <button
            onClick={toggleAvatarMenu}
            className="p-1 border-2 border-primary rounded-full"
          >
            <Avatar name={userName} size="w-10 h-10" textSize="text-lg" />
          </button>
          {isAvatarOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white w-full text-left"
                  role="menuitem"
                >
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                  Ayuda
                </button>
                <button
                  className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white w-full text-left"
                  role="menuitem"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  PQR
                </button>
                <button
                  className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white w-full text-left"
                  role="menuitem"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Cerrar sesión
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="p-1 border-2 border-white rounded-md lg:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="text-white text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute inset-y-0 left-0 w-64 bg-gray-800 py-4 px-6">
          <h2 className="text-white font-bold text-lg mb-4">Menú</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="block text-white hover:underline">
                Página principal
              </a>
            </li>
            <li>
              <a href="/" className="block text-white hover:underline">
                Opción 1
              </a>
            </li>
            <li>
              <a href="/" className="block text-white hover:underline">
                Opción 2
              </a>
            </li>
            <li>
              <a href="/" className="block text-white hover:underline">
                Opción 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Drawer;
