import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
