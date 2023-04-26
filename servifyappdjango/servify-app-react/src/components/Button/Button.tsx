import React, { SVGProps } from 'react';
import cn from 'classnames';

export type ButtonProps = {
  // Defines the component id -kebab casing
  id: string;
  // Defines button type (button, submit, reset)
  type?: 'button' | 'submit' | 'reset';
  // Defines button text
  children: string;
  // Function to be executed on button click
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  // Indicates if the button is disabled
  disabled?: boolean;
  // Indicates button theme (primary, secondary, tertiary)
  theme: 'primary' | 'secondary' | 'tertiary';
  // Defines button icon
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  // Indicates if it's loading
  loading?: boolean;
  // Defines message to displayed when loading
  loadingMsg?: string;
};

const Button = ({
  id,
  type,
  children,
  onClick,
  disabled,
  theme,
  icon: IconComponent,
  loading,
  loadingMsg,
}: ButtonProps): JSX.Element => {
  const themeClasses = {
    primary: cn(
      'bg-primary text-magnolia hover:bg-secondary active:bg-deep-blue disabled:text-white',
      {
        'disabled:bg-regular-grey': disabled,
        'disabled:bg-primary': loading,
      }
    ),

    secondary: `
      border border-primary 
      text-primary 
      hover:bg-magnolia hover:border-secondary hover:text-secondary
      active:bg-magnolia active:border-deep-blue active:text-deep-blue
      disabled:bg-white disabled:border-regular-grey disabled:text-regular-grey
    `,
    tertiary: `
      text-primary 
      hover:bg-magnolia hover:text-secondary 
      active:bg-magnolia active:text-deep-blue 
      disabled:bg-white disabled:text-regular-grey
    `,
  }[theme];

  return (
    <button
      id={`button-${id}`}
      data-testid={`button-${id}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        themeClasses,
        `
          box-border 
          h-[54px]
          rounded-lg 
          text-body-s font-bold 
          flex items-center justify-center 
          disabled:cursor-not-allowed
          transition duration-100
          w-full
        `,
        { 'disabled:opacity-40': disabled }
      )}
    >
      {loading ? (
        <div className='flex justify-center items-center space-x-4'>
          <div className='animate-pulse'>{loadingMsg}</div>
          <div className='animate-spin w-4 h-4 border-2 border-r-[transparent] rounded-full' />
        </div>
      ) : (
        children
      )}

      {IconComponent && <IconComponent className='w-4 h-4 ml-4' />}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
};

export default Button;
