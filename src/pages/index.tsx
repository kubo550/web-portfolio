import {
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Services,
  Acomplishments,
  SectionDivider,
} from "components";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToTop = () =>
    ref.current!.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={ref}
      className='h-notfull overflow-y-scroll overflow-x-hidden snap snap-y snap-mandatory box-content'
    >
      <Hero />
      <SectionDivider> One Scroll is enough :&#41; </SectionDivider>
      <About />
      <SectionDivider my>Peanuts aren’t technically nuts</SectionDivider>
      <Services />
      <SectionDivider my>Did you sleep well tonight?</SectionDivider>
      <Projects />
      <SectionDivider my> I love you </SectionDivider>
      <Acomplishments />
      <SectionDivider my>Cows don’t have upper front teeth</SectionDivider>
      <Contact />
      <Footer scrollToTop={scrollToTop} />
    </motion.div>
  );
};

export default Home;
