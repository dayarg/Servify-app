import React, { InputHTMLAttributes, useState } from "react";

interface DateInputProps{
  label: string;
  placeholder: string;
  value? : string; 
  onChange?: (value: string) => void;
}

const DateInput = ({ label, placeholder,onChange,value, ...props }: DateInputProps): JSX.Element => {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    onChange && onChange(inputValue);
  };
  return (
    <div className="flex flex-col">
      <label className="text-primary mb-1 font-bold">{label}</label>
      <input
        className="appearance-none border-2 border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        type="date"
        placeholder={placeholder}
        {...props}
        onChange={handleOnChange}
        value = {value}
      />
    </div>
  );
};

export default DateInput;


