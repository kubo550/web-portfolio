import Section from "./Section";
import { SectionTitle } from "./Typography";
import { BsCode } from "react-icons/bs";
import { FiMonitor, FiServer } from "react-icons/fi";
import Animation from "./Animation";

const Services = () => (
  <Animation>
    <Section subsection>
      <div className='my-8'>
        <SectionTitle title='Services' subtitle='What i will do for you' />
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-x-6'>
          <div className='col-span-1 my-3 text-gray-100 flex flex-col justify-center items-center md:px-6 bg-gray-900 px-2 py-4 rounded-xl'>
            <BsCode size={28} />
            <b className='mb-3 text'>Front end</b>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dicta doloremque, natus eum esse repellat obcaecati incidunt,
            </p>
          </div>

          <div className='col-span-1 my-3 text-gray-100 flex flex-col justify-center items-center md:px-6 bg-gray-900 px-2 py-4 rounded-xl'>
            <FiMonitor size={28} />
            <b className='mb-3 text'>Web design</b>
            <p className='text-center'>
              A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.
            </p>
          </div>

          <div className='col-span-1 my-3 text-gray-100 flex flex-col justify-center items-center md:px-6 bg-gray-900 px-2 py-4 rounded-xl'>
            <FiServer size={28} />
            <b className='mb-3 text'>Back end</b>
            <p className='text-center'>
              A portfolio for a web designer. We used React JS to make this
              portfolio. A clean design with full responsiveness.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </Animation>
);

export default Services;
