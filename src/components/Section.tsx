import { FC } from "react";

interface SectionProps {
  readonly subsection?: boolean;
  readonly id?: string;
}

const Section: FC<SectionProps> = ({ children, id, subsection }) => (
  <section
    id={id}
    className={`max-w-7xl px-4 lg:px-2 mx-auto flex justify-center items-center flex-col ${
      subsection ? " subsection snap-center" : "min-h-screen snap-start"
    } `}
  >
    {children}
  </section>
);

export default Section;
