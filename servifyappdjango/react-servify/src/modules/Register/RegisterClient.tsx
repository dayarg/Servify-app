import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Mecanico from "../../assets/img/mecanico-banner.jpg";
import DateInput from "../../components/DateInput/DateInput";
import BasicDrawer from "../../components/Drawer/BasicDrawer";
import Checkbox from "../../components/Checkbox/Checkbox";

interface RegisterClientProps {
  identificacion: string;
  Nombre:string;
  Apellido:string;
  Fecha_de_nacimiento:string;
  Ciudad_de_residencia:string;
  Correo_electronico:string;
  telefono:string;
  password:string;
}

const RegisterClient = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterClientProps>({
    identificacion: "",
    Nombre: "",
    Apellido: "",
    Fecha_de_nacimiento:"",
    Ciudad_de_residencia:"",
    Correo_electronico:"",
    telefono: "",
    password: "",
  });



  const handleClick = () => {
    fetch("http://127.0.0.1:8000/core/resgister/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const userName = data.username;
        console.log(data);
        navigate("/start-page", { state: { userName } });
      })
      .catch((error) => console.error(error));
  };
  const handleChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            <div className="mb-6">
              <Input
                label={"Nombre"}
                type={"text"}
                placeholder={"Ingresa tu nombre"}
                value={formData.Nombre}
                onChange={(value) => handleChange("Nombre", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Apellido"}
                type={"text"}
                placeholder={"Ingresa tu apellido"}
                value={formData.Apellido}
                onChange={(value) => handleChange("Apellido", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Correo electrónico"}
                type={"email"}
                placeholder={"Ingresa tu correo electrónico"}
                value={formData.Correo_electronico}
                onChange={(value) => handleChange("Correo_electronico", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Identificacion"}
                type={"text"}
                placeholder={"Ingresa tu identificación"}
                value={formData.identificacion}
                onChange={(value) => handleChange("identificacion", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Teléfono"}
                type={"phone"}
                placeholder={"Ingresa tu teléfono"}
                value={formData.telefono}
                onChange={(value) => handleChange("telefono", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Ciudad de residencia"}
                type={"text"}
                placeholder={"Ingresa tu ciudad de residencia"}
                value={formData.Ciudad_de_residencia}
                onChange={(value) => handleChange("Ciudad_de_residencia", value)}
              />
            </div>
            <div className="mb-6">
              <DateInput
                label="Fecha de nacimiento"
                placeholder="Ingresa tu fecha de nacimiento"
                value={formData.Fecha_de_nacimiento}
                onChange={(value) => handleChange("Fecha_de_nacimiento", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Contraseña"}
                type={"password"}
                placeholder={"Ingresa la contraseña"}
                value={formData.password}
                onChange={(value) => handleChange("password", value)}
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
        <div className="hidden mt-1 md:w-1/2 md:block">
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

export default RegisterClient;