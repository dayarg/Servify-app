import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";


const Register = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start-page')
  }

  return (
    <div className="w-[400px]">
        <Input
        label={"Nombre"}
        type={"text"}
        placeholder={"Ingresa tu nombre"}
      />
      <Input
        label={"Apellido"}
        type={"text"}
        placeholder={"Ingresa tu apellido"}
      />
      <Input
        label={"Correo electrónico"}
        type={"email"}
        placeholder={"Ingresa tu correo electrónico"}
      />
      <Input
        label={"Identificacion"}
        type={"text"}
        placeholder={"Ingresa tu identificación"}
      />
      <Input
        label={"Teléfono"}
        type={"phone"}
        placeholder={"Ingresa tu teléfono"}
      />
      <Input
        label={"Contraseña"}
        type={"password"}
        placeholder={"Ingresa la contraseña"}
      />
      <Button id='BtnLogin' children='Registrarse' onClick={handleClick} theme="primary" type="submit" />
    </div>
  );
};

export default Register;
