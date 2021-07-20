import { FC } from "react";
import Link from "next/link";

interface SectionButtonsProps {
  readonly href: string;
  readonly label: string;
  readonly secondHref: string;
  readonly secondLabel: string;
  readonly download?: boolean;
}

const SectionButtons: FC<SectionButtonsProps> = ({
  href,
  label,
  secondLabel,
  secondHref,
  download,
}) => {
  return (
    <div className='flex w-full justify-around'>
      <Link href={href} passHref>
        <div className='inline-block border-2 mt-10 border-purple-600 rounded-lg px-4 py-2 text-base lg:text-lg text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-100 transition'>
          {label}
        </div>
      </Link>

      <div className='inline-block border-2 mt-10 border-purple-600 rounded-lg px-4 py-2 text-base lg:text-lg text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-100 transition'>
        <a
          href={secondHref}
          download={download}
          target='_blank'
          rel='noreferrer'
        >
          {secondLabel}
        </a>
      </div>
    </div>
  );
};

export default SectionButtons;
