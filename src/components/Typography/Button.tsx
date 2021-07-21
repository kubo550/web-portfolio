import { forwardRef } from "react";
import { FC } from "react";

interface ButtonProps {
  readonly primary?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, primary }) => (
  <div
    className={`className='inline-block border-2 mt-10 border-purple-600 rounded-lg px-4 py-2 text-base lg:text-lg hover:shadow-2xl ${
      primary
        ? " hover:bg-purple-500 hover:text-yellow-100 "
        : " bg-purple-600 hover:bg-transparent hover:text-yellow-100"
    } cursor-pointer  transition  `}
  >
    {children}
  </div>
);
