import Logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const DrawerHome = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="relative w-full h-12">
      <div className="flex items-center justify-between py-4 px-6 bg-white">
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-28 h-14 min-w-28 min-h-14" />
        </div>
      </div>
    </div>
  );
};
export default DrawerHome;
