import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownOptions {
  label: string;
  value: string;
}

export type DropdownProps = {
  id: string;
  label: string;
  options: DropdownOptions[];
  selectedOption: string | null;
  onOptionSelect: (value: string) => void;
};

function Dropdown({
  id,
  label,
  options,
  selectedOption,
  onOptionSelect,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (value: string) => {
    onOptionSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex justify-between appearance-none border-2 border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id={id}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedOption || label}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
        >
          <div className="py-1 bg-white shadow-md border border-light-grey rounded-md font-medium" role="none">
            {options.map((option, index) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:text-primary ${index !== options.length - 1 && ''}`}
                role="menuitem"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
