import DrawerHome from "../../components/Drawer/DrawerHome";
import Banner from "../../assets/img/banner.png";
import BannerMobile from "../../assets/img/bannerMobile.png";
import useBreakpoint from "../../hooks/useBreakpoint";
import DrawerMobile from "../../components/Drawer/DrawerMobile";
import ServifyComponent from "../../components/ServifyComponent/ServifyComponent";

const Home = () => {
  const breakPoint = useBreakpoint();

  return (
    <div className="h-screen w-full flex flex-col">
      {breakPoint === "sm" ? <DrawerHome careers="client" /> : <DrawerMobile careers="client"/>}
      <div className="flex-1 flex flex-col items-center justify-center">
        {breakPoint === "sm" ? (
          <img src={Banner} alt="Banner servify" className="w-full mt-12" />
        ) : (
          <img
            src={BannerMobile}
            alt="Banner Mobile"
            className="w-full h-auto mt-28"
          />
        )}
        <ServifyComponent
          title="Un servicio confiable y profesional a tu alcance."
          description="Con Servify puedes solicitar el servicio que necesites en tu hogar, negocio o empresa rápidamente."
          careers="client"
        />
      </div>
    </div>
  );
};

export default Home;
