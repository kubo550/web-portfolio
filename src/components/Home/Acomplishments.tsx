import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Animation from "../Animation";
import Section from "./Section";
import { SectionTitle } from "../Typography";
import { useCountUp } from "react-countup";
import { useState } from "react";

const Acomplishments = () => {
  return (
    <Section id='acomplishments' subsection>
      <div className='py-20'>
        <SectionTitle title='Personal Acomplishments' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-10 '>
          <AcomplishmentsTile label='Stackoverflow reputation' num={500} />
          <AcomplishmentsTile label='Github contributions' num={2450} />
          <AcomplishmentsTile label='Progress Exercism TS Task' num={70} percent />
          <AcomplishmentsTile label='Github Stars' num={30} />
        </div>
      </div>
    </Section>
  );
};

export default Acomplishments;

interface TileProps {
  readonly num: number;
  readonly label: string;
  readonly percent?: boolean;
}

const AcomplishmentsTile: FC<TileProps> = ({ num, percent, label }) => {
  const [ref, isInView] = useInView();
  const [started, setStarted] = useState(false);
  const { countUp, start } = useCountUp({
    start: 0,
    end: num,
    delay: 1000,
    duration: 5,
  });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      start();
    }
  }, [isInView, start, started]);

  return (
    <div
      ref={ref}
      className='bg-gray-900 p-4 rounded-xl shadow-md text-white text-center sm:text-left'
    >
      <p className='text-3xl font-bold lg:text-4xl text-center w-full'>
        {countUp}
        {percent && "%"}+
      </p>
      <p className='mt-4'>{label}</p>

    </div>
  );
};
