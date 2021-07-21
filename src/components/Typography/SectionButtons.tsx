import { FC } from "react";
import Link from "next/link";
import { Button } from "./Button";

interface SectionButtonsProps {
  readonly href: string;
  readonly label: string;
  readonly secondHref: string;
  readonly secondLabel: string;
  readonly download?: boolean;
}

export const SectionButtons: FC<SectionButtonsProps> = ({
  href,
  label,
  secondLabel,
  secondHref,
  download,
}) => {
  return (
    <div className='flex w-full justify-around'>
      <Link href={href} passHref>
        <Button>{label}</Button>
      </Link>

      <Button primary>
        <a
          href={secondHref}
          download={download}
          target='_blank'
          rel='noreferrer'
        >
          {secondLabel}
        </a>
      </Button>
    </div>
  );
};
