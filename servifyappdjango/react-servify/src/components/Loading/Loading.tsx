import React from 'react';
import loadingAnimation from '../../assets/image/loader.gif';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingAnimation} alt="Loading" />
    </div>
  );
};

export default Loading;
