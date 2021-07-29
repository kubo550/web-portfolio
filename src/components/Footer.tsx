import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrLinkTop } from "react-icons/gr";
import type { FC } from "react";

interface FooterProps {
  scrollToTop?: () => void;
}

const Footer: FC<FooterProps> = ({ scrollToTop }) => {
  return (
    <footer className='footer bg-gray-800 relative pt-1 snap-center mt-auto'>
      <div className='container mx-auto px-6'>
        <div className='sm:flex sm:mt-8'>
          <div className='mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-evenly'>
            <div className='flex text-xs md:text-base  justify-center items-center flex-col w-full  '>
              {scrollToTop && (
                <button
                  onClick={scrollToTop}
                  className='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none transform -translate-y-14'
                >
                  <GrLinkTop size={20} />
                </button>
              )}
              <span className='font-bold text-gray-100 uppercase mb-6'>
                Lets talk
              </span>
              <span className='my-2 text-gray-200'>
                Feel free to contact me via email at
                <a
                  href='mailto:qwercy142@gmail.com'
                  className=' ml-1 text-gray-200 hover:underline '
                >
                  qwercy142@gmail.com
                </a>
              </span>

              <span className='my-2 text-gray-200'>
                Check this and my other
                <span className='text-red-600 '> projects </span>
                on <span className='font-semibold'> GitHub</span>
                <a
                  href='https://github.com/kubo550'
                  className='inline-block  hover:underline '
                >
                  <AiFillGithub
                    size={23}
                    className='ml-1 transform translate-y-1'
                  />
                </a>
              </span>

              <span className='my-2 text-gray-200'>
                Find me on my Linkedin profile
                <a
                  href='https://www.linkedin.com/in/jakub-kurdziel-449714205/'
                  className='inline-block text-gray-200 hover:underline '
                >
                  <AiFillLinkedin
                    size={23}
                    className='ml-1 transform translate-y-1'
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-6'>
        <div className='mt-16 border-t-2 flex flex-col items-center'>
          <div className='sm:w-2/3 text-center py-6'>
            <p className='text-sm font-bold mb-2 text-gray-200'>
              © 2021 by Jakub Kurdziel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
