import Logo from "../../assets/img/logo.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { homeServices } from "./models";

const DrawerHome = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClickLogIn = () => {
    navigate("/login");
  };
  const handleClickJob = () => {
    navigate("/login");
  };
  return (
    <div className="relative w-full h-12">
      <div className="flex items-center justify-between py-4 px-6 bg-white">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-28 h-14 min-w-28 min-h-14" />
        </div>
        <div className="flex ">
          <DropdownMenu
            id="dropdownMenu"
            label="Servicios"
            options={homeServices}
          />
          <button
            onClick={handleClickJob}
            type="button"
            className="inline-flex whitespace-nowrap justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary"
            id="job"
          >
            Trabaja con nosotros
          </button>
          <button
            onClick={handleClickJob}
            type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary"
            id="help"
          >
            Ayuda
          </button>
          <button
            onClick={handleClickJob}
            type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary"
            id="contact"
          >
            Contacto
          </button>
        </div>
        <div className="relative">
          <div className="p-1 w-36">
            <Button
              children="Ingresar"
              id="btnLogin"
              onClick={handleClickLogIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrawerHome;
