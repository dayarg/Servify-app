import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {
  onChange: (searchTerm: string) => void;
}

const SearchInput = ({onChange}: SearchInputProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <input
        className="border border-primary rounded-md pl-8 pr-4 py-2 w-full placeholder-light-grey focus:outline-none focus:border-primary"
        type="text"
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
      </div>
    </div>
  );
};

export default SearchInput;
