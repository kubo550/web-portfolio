import {
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Services,
  Acomplishments,
} from "components";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  return (
    <div className='w-full h-notfull overflow-y-scroll overflow-x-hidden snap snap-y snap-mandatory'>
      <Hero />
      <About />
      <Acomplishments />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

interface ViewProps {
  onScreen: () => void;
}

const View: FC<ViewProps> = ({ onScreen, children }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      onScreen();
    }
  }, [inView, onScreen]);
  return <div ref={ref}>{children}</div>;
};
