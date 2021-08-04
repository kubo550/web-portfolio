/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import type { Project } from "types";
import Link from "next/link";
import { Button } from "components/Typography";

interface ItemProps {
  readonly item: Project;
}

export const ProjectItem: FC<ItemProps> = ({ item }) => {
  return (
    <div className='grid grid-cols-1 bg-green-900 rounded-lg overflow-hidden snap-center'>
      <div className='relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black'>
        <p className='text-xl font-medium text-white'>{item.name}</p>
        <h2 className='text-sm font-semibold text-gray-300'>{item.description}</h2>
      </div>
      <div className='flex w-full justify-around items-center'>
        <Link href={item.code}>
          <a target="_blank" rel="noreferrer" >
            <Button secondary>Code</Button>

          </a>
        </Link>
        <Link href={item.preview}>
          <a target="_blank" rel="noreferrer" >
            <Button secondary>Live</Button>

          </a>
        </Link>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {item.tech_stack.map(e => (
          <span
            key={e}
            className='inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm  font-semibold text-black  mr-2 mb-2'
          >
            {e}
          </span>
        ))}
      </div>
      <div className='col-start-1 row-start-1 flex '>
        <div className='w-full grid grid-cols-3 grid-rows-2 gap-2'>
          <div className='relative col-span-3 row-span-2 '>
            <img
              src={item.image}
              alt=''
              className='absolute inset-0 w-full h-full object-cover bg-gray-100'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
