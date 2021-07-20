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
        <h5 className='text-center text-xl font-light'> {subtitle} </h5>
      )}
      <h2 className='text-center text-5xl font-extrabold mb-5 mt-1'>{title}</h2>
      <div className='text-base md:text-xl text-justify'> {children} </div>
    </>
  );
};
