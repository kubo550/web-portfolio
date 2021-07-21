import Section from "./Section";
import { SectionTitle } from "../Typography";
import { BsCode } from "react-icons/bs";
import { FiMonitor, FiServer } from "react-icons/fi";
import Animation from "../Animation";
import { FC } from "react";

const Services = () => (
  <Animation>
    <Section subsection>
      <div className='my-8'>
        <SectionTitle title='Services' subtitle='What i will do for you' />
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-x-6'>
          <ServicesTile
            title='Front-End'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta doloremque, natus eum esse repellat obcaecati incidunt,'
          >
            <BsCode size={28} />
          </ServicesTile>

          <ServicesTile
            title='Web Design'
            description=' A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.'
          >
            <FiMonitor size={28} />
          </ServicesTile>

          <ServicesTile
            title='Back-End'
            description='A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.'
          >
            <FiServer size={28} />
          </ServicesTile>
        </div>
      </div>
    </Section>
  </Animation>
);

export default Services;

interface TileProps {
  readonly title: string;
  readonly description: string;
}

const ServicesTile: FC<TileProps> = ({ children, title, description }) => {
  return (
    <div className='col-span-1 my-3 text-gray-100 flex flex-col justify-center items-center md:px-6 bg-gray-900 px-2 py-4 rounded-xl'>
      {children}
      <b className='mb-3 text'>{title}</b>
      <p className='text-center'>{description}</p>
    </div>
  );
};
