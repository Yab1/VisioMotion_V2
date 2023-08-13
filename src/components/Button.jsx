import { motion } from "framer-motion";

export default function Button({ name }) {
  return (
    <motion.button
      className="bg-violet-950 px-6 py-1 rounded-full capitalize text-slate-50 w-fit mb-3"
      whileTap={{ scale: 0.85 }}
    >
      <a href="" download>
        {name}
      </a>
    </motion.button>
  );
}
