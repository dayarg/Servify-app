import React from "react";

export type TextareaProps = {
  label: string;
  placeholder: string;
}

const Textarea = ({ label, placeholder }:TextareaProps): JSX.Element => {
  return (
    <div className="my-4">
      <label className="block text-primary text-sm font-bold mb-1">{label}</label>
      <textarea
        className="appearance-none border-2 border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
