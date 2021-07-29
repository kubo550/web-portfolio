import Image from "next/image";

import { motion } from "framer-motion";
import { gamesData } from "data/games";
import { Footer, SectionTitle } from "components";
import { Games } from "components/Projects/Games";
import { BigProjects } from "components/Projects/BigProjects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='max-w-7xl mx-auto min-h-screen'
    >
      <SectionTitle title='Big Projects' />
      <BigProjects />
      <SectionTitle title='Games & animations' />
      <Games />
      <Footer />
    </motion.div>
  );
};

export default Projects;
