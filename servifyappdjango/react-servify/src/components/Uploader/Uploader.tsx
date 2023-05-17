import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

export type UploaderProps = {
    label: string,
}

const Uploader = ({label}: UploaderProps):JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setIsSelected(true);
    }
  };

  return (
    <div className="flex mt-4 flex-col">
        <label htmlFor="file-input" className="mb-2 text-primary font-bold">{label}</label>
      <label className="flex flex-col rounded-lg border-2 border-primary border px-6 py-4 uppercase cursor-pointer text-primary items-center w-full h-auto min-w-0 max-w-full mx-auto flex-grow">
        <FontAwesomeIcon
          icon={faCloudUploadAlt}
          className="w-8 h-8 my-auto text-primary"
        />
        <span className="text-base leading-normal whitespace-nowrap overflow-hidden truncate text-ellipsis max-w-full">
          {isSelected ? selectedFile?.name : "Subir documento"}
        </span>
        <input type="file" className="hidden" onChange={handleFileInput} />
      </label>
    </div>
  );
};

export default Uploader;
