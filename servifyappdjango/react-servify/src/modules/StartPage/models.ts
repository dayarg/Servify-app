//Image service
import Veterinario from '../../assets/img/veterinario.png';
import Construccion from '../../assets/img/constructor.png';
import Plomeria from '../../assets/img/plomero.jpg';
import Carpinteria from '../../assets/img/carpinteria.jpg';
import Electricidad from '../../assets/img/electricista.png';
import Cerrajeria from '../../assets/img/cerrajeria.jpg';
import Jardineria from '../../assets/img/jardineria.jpg';
import Limpieza from '../../assets/img/limpieza.jpg';
import Maquillaje from '../../assets/img/maquillaje.jpg';
import Mecanica from '../../assets/img/mecanico.png';
import Tutoria from '../../assets/img/tutorias.png';
import Mudanza from '../../assets/img/mudanza.jpg';

//Image banner service
import VeterinarioBanner from '../../assets/img/veterinario-banner.jpg';
import ConstruccionBanner from '../../assets/img/construccion-banner.jpg';
import PlomeriaBanner from '../../assets/img/plomero-banner.jpg';
import CarpinteriaBanner from '../../assets/img/carpintero-banner.jpg';
import ElectricidadBanner from '../../assets/img/electricista-banner.jpg';
import CerrajeriaBanner from '../../assets/img/cerrajeria-banner.jpg';
import JardineriaBanner from '../../assets/img/jardineria-banner.jpg';
import LimpiezaBanner from '../../assets/img/limpieza-banner.jpg';
import MaquillajeBanner from '../../assets/img/maquillaje-banner.jpg';
import MecanicaBanner from '../../assets/img/mecanico-banner.jpg';
import TutoriaBanner from '../../assets/img/tutoria-banner.jpg';
import MudanzaBanner from '../../assets/img/mudanza-banner.jpg';

export const serviceCardData = {
    items: [
      {
        image: Veterinario,
        imageBanner: VeterinarioBanner,
        label: "Mascotas",
        link: "/servicio/mascotas",
      },
      {
        image: Construccion,
        imageBanner: ConstruccionBanner,
        label: "Construcción",
        link: "/servicio/construccion",
      },
      {
        image: Plomeria,
        imageBanner: PlomeriaBanner,
        label: "Plomería",
        link: "/servicio/plomeria",
      },
      {
        image: Electricidad,
        imageBanner: ElectricidadBanner,
        label: "Electricidad",
        link: "/servicio/electricidad",
      },
      {
        image: Mecanica,
        imageBanner: MecanicaBanner,
        label: "Mecánica",
        link: "/servicio/mecanica",
      },
      {
        image: Tutoria,
        imageBanner: TutoriaBanner,
        label: "Tutorías",
        link: "/servicio/tutoria",
      },
      {
        image: Carpinteria,
        imageBanner: CarpinteriaBanner,
        label: "Carpintería",
        link: "/servicio/carpinteria",
      },
      {
        image: Jardineria,
        imageBanner: JardineriaBanner,
        label: "Jardinería",
        link: "/servicio/jardineria",
      },
      {
        image: Cerrajeria,
        imageBanner: CerrajeriaBanner,
        label: "Cerrajería",
        link: "/servicio/cerrajeria",
      },
      {
        image: Limpieza,
        imageBanner: LimpiezaBanner,
        label: "Limpieza",
        link: "/servicio/limpieza",
      },
      {
        image: Maquillaje,
        imageBanner: MaquillajeBanner,
        label: "Maquillaje",
        link: "/servicio/maquillaje",
      },
      {
        image: Mudanza,
        imageBanner: MudanzaBanner,
        label: "Mudanzas",
        link: "/servicio/mudanza",
      },
    ],
  };

  export interface ServiceCardItem {
    image: any;
    imageBanner:any;
    label: string;
    link: string;
  }