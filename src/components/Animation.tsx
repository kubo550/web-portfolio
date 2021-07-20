import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Animation: FC = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.4, delay: 0.65 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: "0" },
        hidden: { opacity: 0, scale: 0.4, y: "-100px" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
