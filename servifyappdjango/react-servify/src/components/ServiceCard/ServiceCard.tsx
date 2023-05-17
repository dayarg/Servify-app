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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.items.map((item, index) => (
        <div className="relative" key={index}>
          <img src={item.image} alt="Service" className="w-full h-auto rounded-lg" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h2 className="text-white text-center">{item.label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
