import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm, Footer, SectionTitle, Alert } from "components";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSendState = (type: "error" | "sended") => {
    if (type === "error") {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };
  const resetState = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='max-w-7xl mx-auto min-h-screen mt-5 px-3 flex flex-col'
    >
      <SectionTitle title='Contact with me' />
      <SectionTitle subtitle='I would love to get some feedback from You!' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 relative'>
        <div className='w-full flex justify-center items-center'>
          <Image
            src='/images/contact.svg'
            alt='contact'
            width={300}
            height={400}
          />
        </div>
        <AnimatePresence exitBeforeEnter>
          {success && (
            <Alert
              type='success'
              text='Sended successfully'
              onSubmit={() => setSuccess(false)}
            />
          )}
          {error && (
            <Alert
              type='error'
              text='Error, please try again later or send normal email.'
              onSubmit={() => setError(false)}
            />
          )}
        </AnimatePresence>
        <ContactForm
          handleSendState={handleSendState}
          resetState={resetState}
        />

        <div className='w-full flex flex-row md:flex-col justify-evenly items-center h-full py-5'>
          <div className='flex flex-row items-center'>
            <RiMapPin2Fill size={28} className='mr-2 text-gray-400' />
            <div className='flex-1'>
              <b className='text-purple-700'>ADRESS</b>
              <p className='text-purple-300'>Filipowice 375</p>
            </div>
          </div>

          <div className='flex flex-row items-center'>
            <BsPhone size={28} className='mr-2 text-gray-400' />
            <div className='flex-1'>
              <b className='text-purple-700'>PHONE</b>
              <p className='text-purple-300'>530 913 636</p>
            </div>
          </div>

          <div className='flex flex-row items-center'>
            <AiOutlineMail size={28} className='mr-2  text-gray-400' />
            <div className='flex-1'>
              <b className='text-purple-700'>Mail</b>
              <p className='text-purple-300'>E-mail below</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
