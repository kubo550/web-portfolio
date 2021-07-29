import { motion } from "framer-motion";
import { FC } from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
interface AlertProps {
  type?: "success" | "error";
  text: string;
  onSubmit: () => void;
}

export const Alert: FC<AlertProps> = ({ onSubmit, text, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='bg-transparent text-center py-4 lg:px-4 absolute left-1/3 top-1/3'
    >
      <div
        className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'
        role='alert'
      >
        <span
          className={`flex rounded-full ${
            type === "success" ? "bg-indigo-500" : "bg-red-600"
          } uppercase px-2 py-1 text-xs font-bold mr-3`}
        >
          {type === "success" ? <FaCheck size={22} /> : <ImCross size={22} />}
        </span>
        <span className='font-semibold mr-2 text-left flex-auto'>{text}</span>
        <IoIosClose size={24} onClick={onSubmit} />
      </div>
    </motion.div>
  );
};
