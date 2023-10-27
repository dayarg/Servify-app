import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export type InputProps = {
  label: string;
  type: "text" | "email" | "phone" | "password";
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = ({ label, type, placeholder,value, onChange }: InputProps): JSX.Element => {
  const [, setValue2] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue2(inputValue);

    // Validaciones
    switch (type) {
      case "text":
        if (!inputValue) {
          setError("El campo es requerido");
        } else {
          setError("");
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValue)) {
          setError("Ingrese un correo electrónico válido");
        } else {
          setError("");
        }
        break;
      case "phone":
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(inputValue)) {
          setError("Ingrese un número de teléfono válido");
        } else {
          setError("");
        }
        break;
      case "password":
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (!passwordRegex.test(inputValue)) {
          setError(
            "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número"
          );
        } else {
          setError("");
        }
        break;
      default:
        break;
    }

    onChange && onChange(inputValue);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="block text-primary font-bold mb-1" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`appearance-none border-2 border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
            error ? "border-error" : ""
          }`}
          id={label}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
        />
        {type === "password" && (
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-primary"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="text-error text-xs italic">{error}</p>
      )}
    </div>
  );
};

export default Input;
