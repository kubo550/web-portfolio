import { SectionTitle } from "components/Typography";

export const PastAchivments = () => {
  return (
    <div className='mt-3'>
      <SectionTitle subtitle='Past achievements' left />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 my-3'>
        <div className='col-span-1 bg-purple-900 px-2 py-4 rounded-xl flex justify-center items-center text-md md:text-lg text-white'>
          Computer science technician degree
        </div>
        <div className='col-span-1 bg-purple-900 px-2 py-4 rounded-xl flex justify-center items-center text-md md:text-lg text-white'>
          Google Basics of Internet Marketing
          <a
            href='files/Jakub_Kurdziel_Certifikat.pdf'
            className='ml-2 text-yellow-300'
            download
          >
            certificat
          </a>
        </div>
        <div className='col-span-1 bg-purple-900 px-2 py-4 rounded-xl flex justify-center items-center text-md md:text-lg text-white'>
          Category B driving license
        </div>
      </div>
    </div>
  );
};
