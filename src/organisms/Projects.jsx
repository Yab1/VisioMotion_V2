// Framer Motion imports
import { AnimatePresence, motion } from "framer-motion";

// React imports
import { useEffect, useState } from "react";

// Data import
import data from "../stores/data.json";

// Bootstrap icons imports
import { Arrow90degLeft, ArrowBarRight } from "react-bootstrap-icons";

// Component imports
import ProjectImageCard from "../components/ProjectImageCard";
import ProjectInfoCard from "../components/ProjectInfoCard";
import Title from "../components/Title";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!showMore) {
      const array = data.projects.filter(
        (project) => project.priority === "high"
      );
      setProjects(array);
    } else {
      setProjects(data.projects);
    }
  }, [showMore]);

  return (
    <section className="min-h-screen h-full grid content-center">
      <div className="px-2.5 md:px-10 lg:px-24 xl:px-60">
        <Title title={"My Recent Projects"} />
      </div>
      <AnimatePresence>
        {projects.map((project) => {
          if ((project.id + 1) % 2 === 0) {
            return (
              <motion.div
                key={project.id}
                className="grid grid-cols-2 h-40 md:h-52"
                variants={cardVariants}
                initial="hidden"
                exit="exit"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
              >
                <ProjectInfoCard project={project} />
                <ProjectImageCard project={project} />
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={project.id}
                className="grid grid-cols-2 h-40 md:h-52"
                variants={cardVariants}
                initial="hidden"
                exit="exit"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
              >
                <ProjectImageCard project={project} />
                <ProjectInfoCard project={project} />
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
      <motion.button
        className="mx-auto sm:mr-5 md:mr-7 py-1 px-2 md:pl-6 md:pr-5 md:py-2 text-sm rounded-lg capitalize  w-fit h-fit ml-auto flex items-center gap-2 bg-slate-50 text-violet-950 m-8"
        onClick={() => setShowMore(!showMore)}
        whileTap={{ scale: 0.85 }}
      >
        {showMore ? (
          <>
            View Recent projects
            <Arrow90degLeft className="rotate-90" />
          </>
        ) : (
          <>
            View full portfolio
            <ArrowBarRight />
          </>
        )}
      </motion.button>
    </section>
  );
}
