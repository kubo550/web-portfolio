import { FC } from "react";

interface SectionTitleProps {
  readonly subtitle?: string;
  readonly title?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  subtitle,
  title,
}) => {
  return (
    <>
      {subtitle && (
        <h5 className='text-center text-xl font-light text-indigo-100'>
          {subtitle}
        </h5>
      )}
      <h2 className='text-center text-5xl z-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-indigo-100 from-indigo-700 mb-5 mt-1'>
        {title}
      </h2>
      <div className='text-base md:text-xl text-justify text-indigo-100'>
        {children}
      </div>
    </>
  );
};
