import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center text-white"
    >
      <h1 className="text-4xl">Education Page</h1>
    </motion.div>
  );
}