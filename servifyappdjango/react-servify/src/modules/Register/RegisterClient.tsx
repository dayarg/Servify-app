import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Mecanico from "../../assets/img/mecanico-banner.jpg";
import DateInput from "../../components/DateInput/DateInput";
import BasicDrawer from "../../components/Drawer/BasicDrawer";
import Checkbox from "../../components/Checkbox/Checkbox";

const Register = () => {
  const navigate = useNavigate();
  const terms =
    "He leído y acepto los términos y condiciones de la política de privacidad de Pospet";

  const handleClick = () => {
    navigate("/start-page");
  };

  return (
    <div className="flex flex-col">
      <BasicDrawer />
      <div className="h-screen w-full flex">
        <div className="mx-auto sm:w-1/2 mt-2">
          <h1 className="font-bold text-h2 text-center p-6 text-primary">
            Registro
          </h1>
          <div className="px-14">
            <div className="mb-6">
              <Input
                label={"Nombre"}
                type={"text"}
                placeholder={"Ingresa tu nombre"}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Apellido"}
                type={"text"}
                placeholder={"Ingresa tu apellido"}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Correo electrónico"}
                type={"email"}
                placeholder={"Ingresa tu correo electrónico"}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Identificacion"}
                type={"text"}
                placeholder={"Ingresa tu identificación"}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Teléfono"}
                type={"phone"}
                placeholder={"Ingresa tu teléfono"}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Ciudad de residencia"}
                type={"text"}
                placeholder={"Ingresa tu ciudad de residencia"}
              />
            </div>
            <div className="mb-6">
              <DateInput
                label="Fecha de nacimiento"
                placeholder="Ingresa tu fecha de nacimiento"
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Contraseña"}
                type={"password"}
                placeholder={"Ingresa la contraseña"}
              />
            </div>
            <div className="mb-10">
              <Checkbox id="checkbox-legal" label={terms} />
            </div>
            <div className="mt-2 w-32 float-right">
              <Button
                id="BtnNext"
                children="Finalizar"
                onClick={handleClick}
                theme="primary"
                type="submit"
              />
            </div>
          </div>
        </div>
        <div className="hidden mt-1 md:w-1/2 md:block" >
          <img
            src={Mecanico}
            alt="electricista banner"
            className="w-full h-[1000px] float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;