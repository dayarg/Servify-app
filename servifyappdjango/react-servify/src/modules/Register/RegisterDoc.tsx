import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Carpintero from "../../assets/img/carpintero-banner.jpg";
import Uploader from "../../components/Uploader/Uploader";
import Checkbox from "../../components/Checkbox/Checkbox";
import BasicDrawer from "../../components/Drawer/BasicDrawer";

const RegisterDoc = () => {
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
            <div className="mb-10">
              <Uploader label="Documento de identidad lado frontal" />
            </div>
            <div className="mb-10">
              <Uploader label="Documento de identidad lado posterior" />
            </div>
            <div className="mb-10">
              <Uploader label="Certificación profesional" />
            </div>
            <div className="mb-10">
              <Uploader label="Evidencia de experiencia" />
            </div>
            <div className="mb-10">
              <Checkbox id="checkbox-legal" label={terms} />
            </div>
            <div className="mt-2 w-32 mx-auto">
              <Button
                id="BtnRegister"
                children="Registrarse"
                onClick={handleClick}
                theme="primary"
                type="submit"
              />
            </div>
            <div className="mt-10 mx-auto text-center">
              <span className="text-primary">¿Ya tienes una cuenta? </span>
              <a href="/login" className="text-secondary">
                Inicia sesión
              </a>
            </div>
          </div>
        </div>
        <div className="hidden mt-1 md:w-1/2 md:block sm:w-1/2">
          <img
            src={Carpintero}
            alt="carpintero banner"
            className="w-full h-[1000px] float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterDoc;
