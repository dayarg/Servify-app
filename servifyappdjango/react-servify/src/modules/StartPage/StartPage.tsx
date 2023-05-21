  import { useState } from "react";
  import Drawer from "../../components/Drawer/Drawer";
  import SearchInput from "../../components/SearchInput/SearchInput";
  import ServiceCard from "../../components/ServiceCard/ServiceCard";
  import { serviceCardData, ServiceCardItem } from "./models";

  const StartPage = () => {
    const [, setSearchTerm] = useState("");
    const [filteredServices, setFilteredServices] = useState<ServiceCardItem[]>(serviceCardData.items);

    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);

      // Filtrar los servicios basados en el término de búsqueda
      const filtered = serviceCardData.items.filter((service) =>
        service.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredServices(filtered);
    };

    const filteredServiceData: typeof serviceCardData = {
      items: filteredServices,
    };
    return (
      <div className="h-screen w-full flex flex-col">
        <Drawer userName={''} />
        <div className="flex-1 flex flex-col w-full">
          <div className="w-full bg-secondary flex flex col align-center justify-center h-40">
            <div className="w-96 mx-auto mt-20">
              <SearchInput onChange={handleSearch} />
            </div>
          </div>
          <div className="p-10">
            <h1 className="text-lg font-bold">
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
