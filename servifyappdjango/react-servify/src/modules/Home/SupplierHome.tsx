import DrawerHome from "../../components/Drawer/DrawerHome";
import ClientBanner from "../../assets/img/client-banner.png";
import BannerMobileSupplier from "../../assets/img/bannerMobileSupplier.png";
import useBreakpoint from "../../hooks/useBreakpoint";
import DrawerMobile from "../../components/Drawer/DrawerMobile";
import ServifyComponent from "../../components/ServifyComponent/ServifyComponent";

const SupplierHome = () => {
  const breakPoint = useBreakpoint();

  return (
    <div className="h-screen w-full flex flex-col">
      {breakPoint === "sm" ? (
        <DrawerHome careers="supplier" />
      ) : (
        <DrawerMobile careers="supplier" />
      )}
      <div className="flex-1 flex flex-col items-center justify-center">
        {breakPoint === "sm" ? (
          <img
            src={ClientBanner}
            alt="Banner servify"
            className="w-full mt-12"
          />
        ) : (
          <img
            src={BannerMobileSupplier}
            alt="Banner Mobile"
            className="w-full h-auto mt-20"
          />
        )}
        <ServifyComponent
          title="Genera buenas ganancias haciendo lo que te gusta."
          description="Con Servify puedes ofrecer tu servicio profesional, educativo o técnicos y multiplicar tus ganancias."
          careers="supplier"
        />
      </div>
    </div>
  );
};

export default SupplierHome;
