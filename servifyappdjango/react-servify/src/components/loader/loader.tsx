import React from 'react';
import loadingAnimation from '../../assets/media/loader.gif';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingAnimation} alt="Loading" />
    </div>
  );
};

export default Loader;
