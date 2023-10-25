import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Carpintero from "../../assets/img/carpintero-banner.jpg";
import Uploader from "../../components/Uploader/Uploader";
import Checkbox from "../../components/Checkbox/Checkbox";
import BasicDrawer from "../../components/Drawer/BasicDrawer";
import { useState } from "react";

interface FormDataDoc {
  proveedor_id: number;
  archivos: {
    frontal: string;
    posterior: string;
    certificacion: string;
    experiencia: string;
  };
}

const RegisterDoc = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [archivos, setArchivos] = useState({
    frontal: "",
    posterior: "",
    certificacion: "",
    experiencia: "",
  });

  const handleFileSelect = (file: File, tipo: string) => {
    setArchivos((prevState) => ({
      ...prevState,
      [tipo]: file.name,
    }));
  };

  const handleClick = () => {
    const formDataDoc: FormDataDoc = {
      // eslint-disable-next-line no-mixed-operators
      proveedor_id: userId && parseInt(userId) || 0,
      archivos: archivos,
    };

    fetch(`http://127.0.0.1:8000/core/documentosget/${formDataDoc.proveedor_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataDoc),
    })
      .then((response) => response.json())
      .then((data) => {
        const userName = data.proveedor;
        /* const userId = data.id; */
        navigate("/proveedor-page", { state: { userName/* , userId */ } });
      })
      .catch((error) => console.error(error));
  };

  const terms =
    "He leído y acepto los términos y condiciones de la política de privacidad de Servify";

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
              <Uploader
                label="Documento de identidad lado frontal"
                onFileSelect={(file) => handleFileSelect(file, "frontal")}
              />
            </div>
            <div className="mb-10">
              <Uploader
                label="Documento de identidad lado posterior"
                onFileSelect={(file) => handleFileSelect(file, "posterior")}
              />
            </div>
            <div className="mb-10">
              <Uploader
                label="Certificación profesional"
                onFileSelect={(file) => handleFileSelect(file, "certificacion")}
              />
            </div>
            <div className="mb-10">
              <Uploader
                label="Evidencia de experiencia"
                onFileSelect={(file) => handleFileSelect(file, "experiencia")}
              />
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
