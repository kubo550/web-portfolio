import {
  FAQ,
  Footer,
  PastAchivments,
  SectionDivider,
  SectionTitle,
} from "components";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='max-w-7xl mx-auto min-h-screen mt-5 px-3'
    >
      <SectionTitle title='Know me better' />
      <SectionTitle left subtitle='Little bit who Jakub Kurdziel is' />

      <div className='flex flex-col md:flex-row items-center justify-around'>
        <p className='md:max-w-md text-md xl:text-lg text-gray-100 text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          eaque, esse aut autem iste ex eos et reprehenderit eum, vo quae, nihil
          quod commodi ut neque rerum. Adipisci, deserunt aut.
        </p>
        <Image
          width={400}
          height={400}
          src='/images/prof.jpg'
          alt='My Profile'
          blurDataURL='/images/prof.jpg'
          placeholder='blur'
          className='rounded-lg'
        />
      </div>
      <SectionDivider />

      <PastAchivments />
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default About;
