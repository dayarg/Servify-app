import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export type ServifyComponentProps = {
  title: string;
  description: string;
  careers: 'supplier' | 'client';
}

const ServifyComponent = ({title, description, careers}: ServifyComponentProps): JSX.Element => {
    const navigate = useNavigate()
    const handleClickRegister = () => {
        careers === 'client' ? navigate("/register-client") : careers === 'supplier' && navigate("/register");
      };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full overflow-hidden">
        <div className="p-6 md:w-1/2">
          <h1 className="text-h3 font-bold text-primary">{title}</h1>
        </div>
        <div className="p-6 text-primary md:w-1/2 md:text-right">
          <h2 className="text-lg font-bold mb-2">{description}</h2>
          <div className='w-72 md:float-right'>
          <Button id='btnRegisterServify' children='Registrarse' onClick={handleClickRegister}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServifyComponent;
