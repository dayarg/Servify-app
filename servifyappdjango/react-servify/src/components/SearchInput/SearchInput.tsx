import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput: FC = () => {
  return (
    <div className="relative">
      <input
        className="border border-primary rounded-md pl-8 pr-4 py-2 w-full placeholder-light-grey focus:outline-none focus:border-primary"
        type="text"
        placeholder="Buscar..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
      </div>
    </div>
  );
};

export default SearchInput;
