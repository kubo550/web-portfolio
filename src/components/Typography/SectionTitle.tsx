import { FC } from "react";

interface SectionTitleProps {
  readonly subtitle?: string;
  readonly title?: string;
  readonly left?: boolean;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  subtitle,
  title,
  left,
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {subtitle && (
        <h5
          className={`${
            left ? "text-left w-full" : "text-center"
          } text-xl font-light text-indigo-100`}
        >
          {subtitle}
        </h5>
      )}
      <h2 className='text-center uppercase text-4xl sm:text-5xl z-20 font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-red-500 mb-5 mt-1'>
        {title}
      </h2>
      <div className='text-base md:text-xl text-justify text-indigo-100'>
        {children}
      </div>
    </div>
  );
};
