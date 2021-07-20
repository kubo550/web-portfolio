import { Link as SLink } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrLinkTop } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className='bg-gray-800 relative pt-1 border-b-2 border-white snap-center'>
      <div className='container mx-auto px-6'>
        <div className='sm:flex sm:mt-8'>
          <div className='mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-evenly'>
            <div className='flex text-xs md:text-base  justify-center items-center flex-col w-full  '>
              <span className='font-bold text-gray-100 uppercase mt-4 md:mt-0 mb-2'>
                Lets talk
              </span>
              <span className='my-2 text-gray-200'>
                Feel free to contact me via email at
                <a
                  href='mailto:qwercy142@gmail.com'
                  className='font-bold ml-1 text-black'
                >
                  qwercy142@gmail.com
                </a>
              </span>

              <span className='my-2 text-gray-200'>
                Check my other projects on GitHub
                <a
                  href='https://github.com/kubo550'
                  className='inline-block text-black'
                >
                  <AiFillGithub
                    size={23}
                    className='ml-1 transform translate-y-1'
                  />
                </a>
              </span>

              <span className='my-2 text-gray-200'>
                Find me on my Linkedin profile
                <a href='#' className='inline-block text-black'>
                  <AiFillLinkedin
                    size={23}
                    className='ml-1 transform translate-y-1'
                  />
                </a>
              </span>

              <button className='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none transform translate-y-4'>
                <SLink to='top' spy={true} smooth={true} duration={500}>
                  <GrLinkTop size={20} />
                </SLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-6'>
        <div className='mt-16 border-t-2 border-gray-300 flex flex-col items-center'>
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
