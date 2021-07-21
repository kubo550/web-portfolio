import { FC } from "react";

interface SectionProps {
  readonly subsection?: boolean;
  readonly id?: string;
  readonly my?: boolean;
}

const Section: FC<SectionProps> = ({ children, id, subsection, my }) => (
  <section
    id={id}
    className={`max-w-7xl px-4 lg:px-2 mx-auto relative flex justify-center items-center flex-col ${
      subsection ? " subsection snap-center" : "min-h-screen snap-start"
    } ${my ? "my-20" : ""}  `}
  >
    {children}
  </section>
);

export default Section;
