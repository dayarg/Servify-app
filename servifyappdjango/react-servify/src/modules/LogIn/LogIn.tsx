import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Plomero from "../../assets/img/plomero-banner.jpg";
import BasicDrawer from "../../components/Drawer/BasicDrawer";

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/start-page");
  };

  return (
    <div className="flex flex-col">
      <BasicDrawer />
      <div className="h-screen w-full flex">
        <div className="mx-auto sm:w-1/2 mt-24">
          <h1 className="font-bold text-h2 text-center p-6 mb-10 text-primary">
            Iniciar Sesión
          </h1>
          <div className="px-14">
            <div className="mb-14">
              <Input
                label={"Correo electrónico"}
                type={"email"}
                placeholder={"Ingresa tu correo electrónico"}
              />
            </div>

            <div className="mb-14">
              <Input
                label={"Contraseña"}
                type={"password"}
                placeholder={"Ingresa la contraseña"}
              />
            </div>
            <div className="mt-2 w-32 mx-auto">
              <Button
                id="BtnNext"
                children="Ingresar"
                onClick={handleClick}
                theme="primary"
                type="submit"
              />
            </div>
            <div className="mt-10 mx-auto text-center">
              <span className="text-primary">¿No tienes una cuenta? </span>
              <a href="/register" className="text-secondary">
                Registrate
              </a>
            </div>
          </div>
        </div>
        <div className="hidden mt-6 md:w-1/2 md:block" >
          <img
            src={Plomero}
            alt="plomero banner"
            className="w-screen h-screen float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
