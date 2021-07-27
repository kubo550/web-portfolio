import { ContactForm, Footer, SectionTitle } from "components";
import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='max-w-7xl mx-auto min-h-screen mt-5 px-3'
    >
      <SectionTitle title='Contact with me' />
      <SectionTitle subtitle='I would love to get some feedback from You!' />
      <ContactForm />
      <Footer />
    </motion.div>
  );
};

export default contact;
