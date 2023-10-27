/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import Drawer from "../../components/Drawer/Drawer";
import Close from "../../assets/icons/close-icon.png";
import Location from "../../assets/icons/mapa-icon.png";
import SearchInput from "../../components/SearchInput/SearchInput";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { locationSupplier, serviceCardData, ServiceCardItem } from "./models";
import { useLocation } from "react-router-dom";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl/maplibre";
import { suppliersLocations } from "./models";
import UbicationIcon from "../../assets/icons/ubication-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../components/Avatar/Avatar";
import { Tooltip } from "react-tooltip";

const StartPage = () => {
  const [popupInfo, setPopupInfo] = useState<locationSupplier | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [, setSearchTerm] = useState("");
  const location = useLocation();
  const userName = location.state?.userName || "";
  const userId = location.state?.userId || "";
  const message = location.state?.message || "";

  const saveLoginDataToLocalStorage = (data: any) => {
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  useEffect(() => {
    const loginData = {
      message: message,
      user: userName,
      id: userId,
    };

    saveLoginDataToLocalStorage(loginData);
  }, [userName, userId, message]);

  const storedLoginDataJSON = localStorage.getItem("loginData");
  const storedLoginData = storedLoginDataJSON
    ? JSON.parse(storedLoginDataJSON)
    : {};

  const [filteredServices, setFilteredServices] = useState<ServiceCardItem[]>(
    serviceCardData.items
  );
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const filtered = serviceCardData.items.filter((service) =>
      service.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const filteredServiceData: typeof serviceCardData = {
    items: filteredServices,
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/core/user/${storedLoginData.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((data) => {
        if (data.user) {
          storedLoginData.user = data.user;
          saveLoginDataToLocalStorage(storedLoginData);
        }
      })

      .catch((error) => {
        console.error("Ocurrió un error al hacer la solicitud:", error);
      });
  }, []);

  const pins = useMemo(
    () =>
      suppliersLocations.locations.map((location, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
          }}
        >
          <img
            src={UbicationIcon}
            alt="ubication-icon"
            className="cursor-pointer"
          />
        </Marker>
      )),
    []
  );

  return (
    <div className="h-screen w-full flex flex-col">
      <Drawer userName={storedLoginData.user} />
      <div className="flex-1 flex flex-col w-full">
        <div className="w-full bg-secondary flex items-center justify-center h-40">
          <div className="flex items-center justify-center w-full mx-8 mt-10">
            <div className="w-96 mr-2">
              <SearchInput onChange={handleSearch} />
            </div>
            <div className="bg-white rounded-lg flex w-[42px] h-[42px] items-center justify-center">
              <button
                id="map"
                onClick={() => setShowMap((prevState) => !prevState)}
                className="w-full p-1"
              >
                <img src={Location} alt="location icon" />
              </button>
              <Tooltip
                anchorSelect="#map"
                content="Localización de profesionales"
                place="right"
                variant="light"
              />
            </div>
          </div>
        </div>
        {showMap && (
          <div className="w-full px-16 mt-2">
            <Map
              initialViewState={{
                longitude: -74.09185,
                latitude: 4.70981,
                zoom: 9.5,
              }}
              style={{
                width: "100%",
                height: 300,
                borderRadius: "20px",
                border: "1px solid #c2c2c2",
              }}
              mapStyle="https://api.maptiler.com/maps/streets/style.json?key=3PssLqjAKOLmqNZRrXu0"
            >
              <GeolocateControl position="top-left" />
              <FullscreenControl position="top-left" />
              <NavigationControl position="top-left" />
              <ScaleControl />

              {pins}

              {popupInfo && (
                <Popup
                  anchor="left"
                  longitude={Number(popupInfo.longitude)}
                  latitude={Number(popupInfo.latitude)}
                  onClose={() => setPopupInfo(null)}
                  closeButton={false}
                  style={{ paddingBottom: "30px" }}
                >
                  <div className="flex flex-col">
                    <button
                      onClick={() => setPopupInfo(null)}
                      className="outline-none"
                    >
                      <img
                        src={Close}
                        alt="close icon"
                        className="w-3 float-right -mt-2 -mr-1 mb-1"
                      />
                    </button>
                    <div className="flex">
                      <Avatar name={popupInfo.name} textSize="text-h6" />
                      <div className="ml-2">
                        <h1 className=" text-body-m font-bold text-secondary">
                          {popupInfo.name}
                        </h1>
                        <p className="text-detail-s font-bold">
                          {popupInfo.profession}
                        </p>
                        <div className="flex items-center mb-2 mt-2">
                          {[...Array(popupInfo.rating)].map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              className="text-yellow mr-1"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        )}
        <div className="p-10 pt-6">
          <h1 className="text-lg font-bold text-primary-blue">
            Escoge el servicio que deseas solicitar
          </h1>
          <div className="mt-8">
            <ServiceCard data={filteredServiceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
