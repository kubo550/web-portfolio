import { Button } from "components/Typography";
import { projects } from "data";
import Image from "next/image";
export const BigProjects = () => {
  return (
    <div>
      {projects.map(game => (
        <div
          key={game.id}
          className='grid grid-cols-1  sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 '
        >
          <div
            className={`relative z-10 col-start-1 sm:col-start-${game.id % 2 === 0 ? "1" : "2"
              } row-start-1 px-4 pb-4  md:pb-6 flex flex-col justify-end bg-gradient-to-t from-black sm:bg-none`}
          >
            <h2 className='text-xl font-semibold text-white sm:text-2xl sm:leading-7 md:text-gray-100 md:text-3xl mb-4'>
              {game.name}
            </h2>
            <h5 className='text-md font-thin text-white  sm:text-lg sm:leading-5 sm:text-gray-200 md:text-xl'>
              {game.description}
            </h5>
          </div>
          <div
            className={`col-start-1 sm:col-start-${game.id % 2 === 0 ? "1" : "2"
              }  row-start-2 px-4 pb-0`}
          >
            <div className='flex w-full justify-around'>
              <a href={game.code} target="_blank" rel="noreferrer" title="Check code on github">
                <Button secondary>Code</Button>
              </a>
              <a href={game.preview} target="_blank" rel="noreferrer" title="Check effect">
                <Button secondary>Preview</Button>
              </a>
            </div>
          </div>

          <div
            className={`col-start-1 sm:col-start-${game.id % 2 === 0 ? "2" : "1"
              } row-start-1 flex  sm:row-span-3`}
          >
            <div className='w-full grid-cols-3 grid-rows-2 gap-2'>
              <div className='relative col-span-3 row-span-2 my-auto flex justify-center'>
                <Image
                  src={game.image}
                  alt={game.name + " preview"}
                  placeholder='blur'
                  blurDataURL={game.image}
                  width={600}
                  height={400}
                  className='absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg'
                />
              </div>
            </div>
          </div>
          <div
            className={`col-start-1 sm:col-start-${game.id % 2 === 0 ? "1" : "2"
              } row-start-3 space-y-3 px-4 mb-4`}
          >
            <div className='flex items-center flex-wrap text-black text-sm font-medium'>
              {game.tech_stack.map(el => (
                <div
                  className=' px-2 py-1 rounded-xl mx-3 my-2 bg-transparent border-2 border-gray-400 text-gray-400'
                  key={el}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
