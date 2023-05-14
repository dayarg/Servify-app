import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const TimeInput = ({ label, placeholder, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-primary mb-1 font-bold">{label}</label>
      <input
        className="appearance-none border-2 border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        type="time"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TimeInput;
