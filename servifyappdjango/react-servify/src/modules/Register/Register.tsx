import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Electricista from "../../assets/img/electricista-banner.jpg";
import DateInput from "../../components/DateInput/DateInput";
import BasicDrawer from "../../components/Drawer/BasicDrawer";
import Dropdown from "../../components/DropdownMenu/Dropdown";

interface FormData {
  Nombre: string;
  Apellido: string;
  Correo_electronico: string;
  identificacion: string;
  telefono: string;
  Ciudad_de_residencia: string;
  Fecha_de_nacimiento: string;
  Profesion: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    Nombre: "",
    Apellido: "",
    Correo_electronico: "",
    identificacion: "",
    telefono: "",
    Ciudad_de_residencia: "",
    Fecha_de_nacimiento: "",
    Profesion: "",
    password: "",
  });

  const handleClick = () => {
    fetch("http://127.0.0.1:8000/core/proveedores/resgister/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const userName = data.username;
        const userId = data["user.id"];
        if (userId) {
          navigate(`/register-2/${userId}`, { state: { userName } });
        } else {
          console.error("No se pudo obtener el ID del usuario");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const profesiones = [
    { label: "Veterinario/a", value: "veterinario" },
    { label: "Albañil", value: "albañil" },
    { label: "Plomero/a", value: "plomero" },
    { label: "Electricista", value: "electricista" },
    { label: "Mecanico/a", value: "mecanico" },
    { label: "Profesor/a", value: "profesor" },
    { label: "Carpintero/a", value: "carpintero" },
    { label: "Jardinero/a", value: "jardinero" },
    { label: "Cerrajero/a", value: "cerrajero" },
    { label: "Aseador/a", value: "aseador" },
    { label: "Maquillista", value: "maquillista" },
    { label: "Mudanzas", value: "mudanzas" },
  ];

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
                value={formData.Nombre}
                placeholder={"Ingresa tu nombre"}
                onChange={(value) => handleChange("Nombre", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Apellido"}
                type={"text"}
                value={formData.Apellido}
                placeholder={"Ingresa tu apellido"}
                onChange={(value) => handleChange("Apellido", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Correo electrónico"}
                type={"email"}
                value={formData.Correo_electronico}
                placeholder={"Ingresa tu correo electrónico"}
                onChange={(value) => handleChange("Correo_electronico", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Identificacion"}
                type={"text"}
                value={formData.identificacion}
                placeholder={"Ingresa tu identificación"}
                onChange={(value) => handleChange("identificacion", value)}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Teléfono"}
                type={"phone"}
                value={formData.telefono}
                placeholder={"Ingresa tu teléfono"}
                onChange={(value) => handleChange("telefono", value)}
              />
            </div>
            <div className="mb-6">
            <Dropdown
                id="dropdownMenu"
                label="Selecciona una ciudad"
                options={[{label: 'Bogotá', value: 'Bogota'}]}
                selectedOption={formData.Ciudad_de_residencia}
                onOptionSelect={(value) => {
                  handleChange("Ciudad_de_residencia", value)}}
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
              <label
                className="text-primary mb-1 font-bold"
                htmlFor="Profesion"
              >
                Profesión
              </label>
              <Dropdown
                id="dropdownMenu"
                label="Selecciona una profesión"
                options={profesiones}
                selectedOption={formData.Profesion}
                onOptionSelect={(value) => {
                  handleChange("Profesion", value)}}
              />
            </div>
            <div className="mb-6">
              <Input
                label={"Contraseña"}
                type={"password"}
                value={formData.password}
                placeholder={"Ingresa la contraseña"}
                onChange={(value) => {handleChange("password", value)}}
              />
            </div>
            <div className="mt-2 w-32 float-right">
              <Button
                id="BtnNext"
                children="Siguiente"
                onClick={handleClick}
                theme="primary"
                type="submit"
              />
            </div>
          </div>
        </div>
        <div className="hidden mt-1 md:w-1/2 md:block">
          <img
            src={Electricista}
            alt="electricista banner"
            className="w-full h-[1000px] float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
