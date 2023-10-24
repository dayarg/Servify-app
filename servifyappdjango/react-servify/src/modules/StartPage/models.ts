//Image service
import Veterinario from "../../assets/img/veterinario.png";
import Construccion from "../../assets/img/constructor.png";
import Plomeria from "../../assets/img/plomero.jpg";
import Carpinteria from "../../assets/img/carpinteria.jpg";
import Electricidad from "../../assets/img/electricista.png";
import Cerrajeria from "../../assets/img/cerrajeria.jpg";
import Jardineria from "../../assets/img/jardineria.jpg";
import Limpieza from "../../assets/img/limpieza.jpg";
import Maquillaje from "../../assets/img/maquillaje.jpg";
import Mecanica from "../../assets/img/mecanico.png";
import Tutoria from "../../assets/img/tutorias.png";
import Mudanza from "../../assets/img/mudanza.jpg";

//Image banner service
import VeterinarioBanner from "../../assets/img/veterinario-banner.jpg";
import ConstruccionBanner from "../../assets/img/construccion-banner.jpg";
import PlomeriaBanner from "../../assets/img/plomero-banner.jpg";
import CarpinteriaBanner from "../../assets/img/carpintero-banner.jpg";
import ElectricidadBanner from "../../assets/img/electricista-banner.jpg";
import CerrajeriaBanner from "../../assets/img/cerrajeria-banner.jpg";
import JardineriaBanner from "../../assets/img/jardineria-banner.jpg";
import LimpiezaBanner from "../../assets/img/limpieza-banner.jpg";
import MaquillajeBanner from "../../assets/img/maquillaje-banner.jpg";
import MecanicaBanner from "../../assets/img/mecanico-banner.jpg";
import TutoriaBanner from "../../assets/img/tutoria-banner.jpg";
import MudanzaBanner from "../../assets/img/mudanza-banner.jpg";

export const serviceCardData = {
  items: [
    {
      image: Veterinario,
      imageBanner: VeterinarioBanner,
      label: "Mascotas",
      profession: "Veterinario",
      link: "/servicio/mascotas",
    },
    {
      image: Construccion,
      imageBanner: ConstruccionBanner,
      label: "Construcción",
      profession: "Albañil",
      link: "/servicio/construccion",
    },
    {
      image: Plomeria,
      imageBanner: PlomeriaBanner,
      label: "Plomería",
      profession: "Plomero",
      link: "/servicio/plomeria",
    },
    {
      image: Electricidad,
      imageBanner: ElectricidadBanner,
      label: "Electricidad",
      profession: "Electricista",
      link: "/servicio/electricidad",
    },
    {
      image: Mecanica,
      imageBanner: MecanicaBanner,
      label: "Mecánica",
      profession: "Mecanico",
      link: "/servicio/mecanica",
    },
    {
      image: Tutoria,
      imageBanner: TutoriaBanner,
      label: "Tutorías",
      profession: "Profesora",
      link: "/servicio/tutoria",
    },
    {
      image: Carpinteria,
      imageBanner: CarpinteriaBanner,
      label: "Carpintería",
      profession: "Carpintero",
      link: "/servicio/carpinteria",
    },
    {
      image: Jardineria,
      imageBanner: JardineriaBanner,
      label: "Jardinería",
      profession: "Jardinero",
      link: "/servicio/jardineria",
    },
    {
      image: Cerrajeria,
      imageBanner: CerrajeriaBanner,
      label: "Cerrajería",
      profession: "Cerrajero",
      link: "/servicio/cerrajeria",
    },
    {
      image: Limpieza,
      imageBanner: LimpiezaBanner,
      label: "Limpieza",
      profession: "Aseador",
      link: "/servicio/limpieza",
    },
    {
      image: Maquillaje,
      imageBanner: MaquillajeBanner,
      label: "Maquillaje",
      profession: "Maquillista",
      link: "/servicio/maquillaje",
    },
    {
      image: Mudanza,
      imageBanner: MudanzaBanner,
      label: "Mudanzas",
      profession: "mudanzas",
      link: "/servicio/mudanza",
    },
  ],
};

export interface ServiceCardItem {
  image: any;
  imageBanner: any;
  label: string;
  profession: string;
  link: string;
}

export const suppliersLocations = {
  locations: [
    {
      id: 1,
      name: "Brandon Alvarez",
      longitude: -74.111325,
      latitude: 4.606764,
      profession: 'Veterinario',
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Lopez",
      longitude: -74.0298749,
      latitude: 4.7514072,
      profession: 'Profesora',
      rating: 4,
    },
    {
      id: 3,
      name: "Juan Jaramillo",
      longitude: -74.06322,
      latitude: 4.609556,
      profession: 'Jardinero',
      rating: 4,
    },
    {
      id: 4,
      name: "Dayana Rodriguez",
      longitude: -74.1695729,
      latitude: 4.5915694,
      profession: 'Jardinera',
      rating: 5,
    },
    {
      id: 5,
      name: "Alejandro Guevara",
      longitude: -74.115109,
      latitude: 4.665676,
      profession: 'Carpintero',
      rating: 5,
    },
    {
      id: 6,
      name: "Laura Narvaez",
      longitude: -74.081673,
      latitude: 4.682157,
      profession: 'Profesora',
      rating: 5,
    },
    {
      id: 7,
      name: "Eugenia Solano",
      longitude: -74.085905,
      latitude: 4.667019,
      profession: 'Profesora',
      rating: 5,
    },
    {
      id: 8,
      name: "Giovanni Perez",
      longitude:  -74.085905,
      latitude: 4.638893,
      profession: 'Carpintero',
      rating: 3,
    },
    {
      id: 9,
      name: "Nidia Morales",
      longitude:  -74.047360,
      latitude: 4.694719,
      profession: 'Carpintera',
      rating: 4,
    },
  ],
};

export interface locationSupplier {
  id: number,
  name: string;
  longitude: number;
  latitude: number;
  profession: string;
  rating: number;
}
