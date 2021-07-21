import { FAQ, Footer } from "components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='max-w-7xl mx-auto min-h-screen'
    >
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default About;
