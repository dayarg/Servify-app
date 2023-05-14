import { useState } from "react";

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox = ({ id, label}: CheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        id={id}
        type="checkbox"
        className="form-checkbox h-5 w-5 text-primary transition duration-150 ease-in-out"
        checked={isChecked}
        onChange={handleCheck}
      />
      <span className="ml-2 text-primary">{label}</span>
    </label>
  );
};

export default Checkbox;
