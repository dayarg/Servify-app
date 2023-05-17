import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";


const Home = () => {

  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate('/register');
  }

  const handleClickLogIn = () => {
    navigate('/login');
  }

  return (
    <div className="w-[400px]">
      <Button id='BtnLogin' children='Iniciar sesión' onClick={handleClickLogIn} theme="primary" />
      <Button id='BtnRegister' children='Register' onClick={handleClickRegister} theme="tertiary" />
    </div>
  );
};

export default Home;
