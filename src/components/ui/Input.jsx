import React from "react";

const Input = ({ children, ...rest }) => {
  return (
    <input
      className="mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white"
      {...rest}
    >
      {children}
    </input>
  );
};

export default Input;
