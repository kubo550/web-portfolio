import { FaUserAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { BiCodeBlock } from "react-icons/bi";

import { forwardRef, ReactNode } from "react";

type ButtonType = "profile" | "download" | "contact" | "code";

interface ButtonProps {
  readonly type?: ButtonType;
  readonly arrow?: boolean;
  readonly children: ReactNode;
}

const iconByType = new Map<ButtonType, ReturnType<typeof FaUserAlt>>([
  ["profile", <FaUserAlt key='profile' size={16} />],
  ["contact", <FiMessageSquare key='contact' size={16} />],
  ["download", <HiDownload key='download' size={16} />],
  ["code", <BiCodeBlock key='code' size={16} />],
]);

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ children, type, arrow }, ref) => (
    <div
      ref={ref}
      className='flex flex-row items-center px-4 py-2 rounded-full bg-gradient-to-bl from-purple-600 '
    >
      {type && (
        <div className=' w-10 h-10 border-white border-2 flex items-center justify-center rounded-full '>
          {iconByType.get(type)}
        </div>
      )}

      <p className='uppercase mx-2 text-base'> {children} </p>
      {arrow && <BiRightArrow className='mr-2' size={12} />}
    </div>
  )
);
Button.displayName = "button";
