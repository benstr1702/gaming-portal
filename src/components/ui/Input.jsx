import React from "react";

/*
  with typescript it would look like this

type props = {
} & React.ButtonHTMLAttributes<HTMLButtonElement>

or 
interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// custom props here for example 
 variant?: "primary" | "dark";
}

and when using it you would still get Button Attributes with intelisense 
const Input = ({ children, ...rest }: props) => {
*/

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
