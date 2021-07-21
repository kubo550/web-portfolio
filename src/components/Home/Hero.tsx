import { Section, SectionTitle } from "components";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

const Hero: FC = () => {
  const [displayinfo, setDisplayinfo] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayinfo(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Section id='hero'>
      <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          src='/video/bg.mp4'
          className='w-full h-5/6 object-cover border-2 border-gray-800 mt-8'
        />
      </div>

      <div className='absolute left-auto md:left-1/4 top-auto md:top-1/3 '>
        <SectionTitle
          title='Hi there!'
          subtitle='Welcome to my personal portfolio'
        >
          <AnimatePresence exitBeforeEnter>
            {displayinfo && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ y: 0 }}
                animate={{
                  y: ["5px", "-10px", "5px", "-5px", "5px", "-5px"],
                  transition: { delay: 1.5 },
                }}
                className='hidden md:flex'
              >
                <p> Use Spacebar to moving around </p>
              </motion.div>
            )}
          </AnimatePresence>
        </SectionTitle>
      </div>
    </Section>
  );
};

export default Hero;
