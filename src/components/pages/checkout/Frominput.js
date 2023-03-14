import { useState } from "react";
import "./fromInput.css";

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="">
      <label className="block text-xl text-black">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        className="border-2 border-gray-400   w-72  py-2 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md   focus:outline-none"
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Forminput;
