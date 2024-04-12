/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import Input from "../Input/Input";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface SearchDropdownProps {
  options: any[];
  selected: string | number | boolean;
  onSelect: (option: DropdownOption) => void;
  customStyle?: string;
  searchField?: boolean;
  id?: string;
  selectedValueStyles?: string;
  searchCallback: (searchText: string) => void;
  placeholder?: string;
}

export function SearchDropdown({
  options,
  selected,
  onSelect,
  customStyle,
  searchField,
  id,
  selectedValueStyles,
  searchCallback,
  placeholder,
}: SearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [filter, setFilter] = useState("");
  const [display, setDisplay] = useState(selected);
  const [isValueSelectedByUser, setIsValueSelectedByUser] = useState(false);
  const [filteredOptions, setFilteredOptions] =
    useState<DropdownOption[]>(options);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setFilteredOptions(options);
    if (filter !== "") {
      setFilteredOptions(
        options.filter((option) =>
          option.Value?.toLowerCase().includes(filter.toLowerCase()),
        ),
      );
    }
  }, [options, filter]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
    setFilter(option.label);
    setIsValueSelectedByUser(!isValueSelectedByUser);
  };

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFilter(event.target.value);
    setIsValueSelectedByUser(false);
  };

  useEffect(() => {
    setDisplay(selected);
  }, [selected, filteredOptions]);

  useEffect(() => {
    // Close the dropdown when a click occurs outside the component
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    searchCallback(filter);
  }, [filter]);

  return (
    <div className="position-relative">
      <div className="relative">
        {searchField && (
          <div className="relative">
            <Input
              type="text"
              id={placeholder}
              name={placeholder}
              value={filter}
              onChange={handleSearch}
              placeholder={placeholder}
              className="form-control form-control-sm"
            />
          </div>
        )}
      </div>
      {searchField && options.length > 0 && !isValueSelectedByUser && (
        <ul
          id="select-option"
          className="position-absolute z-50 mt-2 max-h-64 w-full overflow-y-auto rounded bg-white p-1 pl-0 text-gray-700 shadow-lg border border-gray-200"
          style={{
            top: "26px",
            left: 0,
          }}
          onMouseLeave={handleToggle}
        >
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                role="presentation"
                className="p-1 hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="p-1 text-gray-500">{/* no result found text */}</li>
          )}
        </ul>
      )}
    </div>
  );
}
