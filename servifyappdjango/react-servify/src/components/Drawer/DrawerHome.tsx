import Logo from "../../assets/img/logo.png";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { homeServices } from "./models";

export type DrawerHomeProps = {
  careers: "supplier" | "client";
};

const DrawerHome = ({ careers }: DrawerHomeProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogIn = () => {
    careers === "supplier"
      ? navigate("/login")
      : careers === "client" && navigate("/login-client");
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
            onClick={() => navigate("/")}
            type="button"
            className={`inline-flex whitespace-nowrap justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary ${
              location.pathname === "/" && "text-secondary font-black"
            }`}
            id="client"
          >
            Quiero solicitar un servicio
          </button>
          <button
            onClick={() => navigate("/home-supplier")}
            type="button"
            className={`inline-flex whitespace-nowrap justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary ${
              location.pathname === "/home-supplier" &&
              "text-secondary font-black"
            }`}
          >
            Quiero ofrecer un servicio
          </button>
          <button
            onClick={() => navigate("/")}
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
