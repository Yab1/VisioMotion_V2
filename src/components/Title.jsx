import { motion } from "framer-motion";
import dots from "../assets/dots.svg";

const titleVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8 },
  },
};

export default function Title({ title }) {
  return (
    <motion.div
      id={title.toLowerCase()}
      className="font-black text-2xl align-center relative mb-14"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <img src={dots} alt="dot" className="" />
      <h2 className="absolute left-5 top-5 z-1">{title}</h2>
    </motion.div>
  );
}
