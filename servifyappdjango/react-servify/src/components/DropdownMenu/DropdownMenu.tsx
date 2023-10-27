import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownOptions {
  label: string;
  link: string;
}
export type DropdownMenuProps = {
  id: string;
  label: string;
  options: DropdownOptions[];
};

function DropdownMenu({ id, label, options }: DropdownMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-primary hover:text-secondary"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-2 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="origin-center absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 bg-white shadow-md border border-light-grey rounded-md text-secondary font-medium" role="none">
            {options.map((option, index) => (
              <a
                key={option.link}
                href={option.link}
                className={`block px-4 py-2 text-sm text-gray-700 hover:text-primary ${index !== options.length - 1 && 'border-b border-light-grey'}`}
                role="menuitem"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
