import React, { useState } from "react";

const AnimatedFormField = ({ type, name, label }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div class="relative z-0 w-full group bg-darkGrey ">
      <input type={type} name={name} id={name} class="block py-4 px-10 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryGreen focus:outline-none focus:ring-0 focus:border-primaryGreen peer" placeholder=" " required />
      <label for={name} class="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 left-10 -z-10 origin-[0] peer-focus:left-10 peer-focus:text-primaryGreen peer-focus:dark:text-primaryGreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-10">{label}</label>
  </div>
  );
};

export default AnimatedFormField;
