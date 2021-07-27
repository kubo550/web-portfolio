import Section from "./Section";
import { SectionTitle } from "../Typography";
import { BsCode } from "react-icons/bs";
import { FiMonitor, FiServer } from "react-icons/fi";
import Animation from "../Animation";
import { FC, useMemo } from "react";

const Services = () => (
  <Section subsection>
    <div className='my-8'>
      <SectionTitle title='Services' subtitle='What i will do for you' />
      <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-x-6'>
        <ServicesTile
          title='Front-End'
          idxLetterOtherColor={6}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta doloremque, natus eum esse repellat obcaecati incidunt,'
        >
          <Animation delay={0.5}>
            <BsCode size={42} />
          </Animation>
        </ServicesTile>

        <ServicesTile
          idxLetterOtherColor={1}
          title='Web Design'
          description=' A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.'
        >
          <Animation delay={1.5}>
            <FiMonitor size={42} />
          </Animation>
        </ServicesTile>

        <ServicesTile
          idxLetterOtherColor={3}
          title='Back-End'
          description='A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.'
        >
          <Animation delay={2.5}>
            <FiServer size={42} />
          </Animation>
        </ServicesTile>
      </div>
    </div>
  </Section>
);

export default Services;

interface TileProps {
  readonly title: string;
  readonly description: string;
  readonly idxLetterOtherColor: number;
}

const ServicesTile: FC<TileProps> = ({
  children,
  title,
  description,
  idxLetterOtherColor,
}) => {
  return (
    <div className='col-span-1 my-3 text-gray-100 flex flex-col justify-center items-center md:px-6 bg-gray-900 px-2 py-4 rounded-xl md:snap-none'>
      {children}
      <b className='mb-3 text'>
        {[...title].map((letter, idx) => (
          <span
            key={idx}
            className={idxLetterOtherColor === idx ? "text-red-700" : ""}
          >
            {letter}
          </span>
        ))}
      </b>
      <p className='text-center'>{description}</p>
    </div>
  );
};
