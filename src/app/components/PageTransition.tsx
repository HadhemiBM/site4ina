// components/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
  initial: { opacity: 0, x: -100, filter: 'blur(10px)' }, 
  in: { opacity: 1, x: 0, filter: 'blur(0px)' },          
  out: { opacity: 0, x: 100, filter: 'blur(10px)' },       
};
 
interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
