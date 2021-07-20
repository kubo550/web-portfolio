import Animation from "./Animation";
import Section from "./Section";
import { SectionTitle } from "./Typography";

const Acomplishments = () => {
  return (
    <Animation>
      <Section id='acomplishments' subsection>
        <div className='py-20'>
          <SectionTitle title='Personal Acomplishments' />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-10'>
            <div className='bg-gray-900 p-4 rounded-xl shadow-md text-white text-center sm:text-left'>
              <p className='text-3xl font-bold lg:text-4xl text-center w-full'>
                470+
              </p>
              <p className='mt-4'>Stackoverflow reputation</p>
            </div>

            <div className='bg-gray-900 p-4 rounded-xl shadow-md text-white text-center sm:text-left'>
              <p className='text-3xl font-bold lg:text-4xl text-center w-full'>
                2,450+
              </p>
              <p className='mt-4'>Github contributions</p>
            </div>

            <div className='bg-gray-900 p-4 rounded-xl shadow-md text-white text-center sm:text-left'>
              <p className='text-3xl font-bold lg:text-4xl text-center w-full'>
                70%+
              </p>
              <p className='mt-4'>Progress Exercism TS Task</p>
            </div>

            <div className='bg-gray-900 p-4 rounded-xl shadow-md text-white text-center sm:text-left'>
              <p className='text-3xl font-bold lg:text-4xl text-center w-full'>
                30+
              </p>
              <p className='mt-4'>Github Stars</p>
            </div>
          </div>
        </div>
      </Section>
    </Animation>
  );
};

export default Acomplishments;
