import { FC } from "react";

interface DividerProps {
  readonly my?: boolean;
}

export const SectionDivider: FC<DividerProps> = ({ children, my }) => (
  <div className={`flex items-center ${my ? "my-24" : "my-10"}`}>
    <div className='flex-1 h-1 bg-gradient-to-l from-purple-400 via-pink-500 to-red-500' />
    <span className='py-0 px-3 text-yellow-100'> {children} </span>
    <div className='flex-1 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
  </div>
);
