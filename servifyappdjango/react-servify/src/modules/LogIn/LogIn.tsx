import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";


const LogIn = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start-page')
  }

  return (
    <div className="w-[400px]">
      <Input
        label={"Correo electrónico"}
        type={"email"}
        placeholder={"Ingresa tu correo electrónico"}
      />
      <Input
        label={"Contraseña"}
        type={"password"}
        placeholder={"Ingresa la contraseña"}
      />
      <Button id='BtnLogin' children='Iniciar sesión' onClick={handleClick} theme="primary" type="submit" />
    </div>
  );
};

export default LogIn;
