import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimationProps {
  readonly delay?: number;
}

const Animation: FC<AnimationProps> = ({ children, delay = 1 }) => {
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
      transition={{ duration: 0.4, delay: delay * 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
