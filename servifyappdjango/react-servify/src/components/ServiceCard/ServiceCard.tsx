import React from 'react';

interface ServiceCardProps {
  data: ServiceCardData;
}

interface ServiceCardData {
  items: ServiceCardItem[];
}

interface ServiceCardItem {
  image: string;
  label: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.items.map((item, index) => (
        <a href={item.link} rel="noopener noreferrer" key={index}>
          <div className="relative cursor-pointer">
            <div className="h-60">
              <img src={item.image} alt="Service" className="object-cover w-full h-full rounded-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <h2 className="text-white text-center font-bold text-2xl">{item.label}</h2>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServiceCard;
