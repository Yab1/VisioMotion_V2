// React imports
import { useState, useEffect } from "react";

// Data import
import data from "../stores/data.json";

// Asset imports
import avatar from "../assets/avatar_yab.png";

// Framer Motion imports
import { motion } from "framer-motion";

// Bootstrap icons imports
import { Calendar, HandThumbsUp, People, Trophy } from "react-bootstrap-icons";

// Component imports
import Title from "../components/Title";
import Section from "../components/Section";
import Button from "../components/Button";

const leftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "", duration: 1 } },
};
const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "", duration: 1 } },
};
const bottomVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "", duration: 1 } },
};

export default function About() {
  const [services, setServices] = useState([]);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    setServices(data.services);
    setStatistics(data.statistics);
  }, []);

  return (
    <Section>
      <Title title={"About Me"} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-6 md:gap-0">
        <motion.img
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          src={avatar}
          alt="avatar"
          className="mx-auto md:my-auto w-40"
        />
        {/* Card*/}
        <motion.section
          className="relative p-1 md:col-span-4 lg:col-span-5"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className="before:absolute before:inset-0 before:w-6 before:h-6 before:bg-slate-50 before:rotate-45 before:top-1/3 before:shadow-2xl hidden md:inline"></span>
          <span className="before:absolute before:bg-slate-50 before:w-6 before:h-6 before:top-0 before:rotate-45 flex justify-center align-center before:shadow-2xl md:hidden"></span>
          <div className="drop-shadow-xl bg-slate-50 text-slate-700 rounded-xl grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
            {/* About Me */}
            <div className="flex flex-col gap-5">
              <p className="text-sm font-medium relative z-10">
                I'm Yeabsera Lisanework, a skilled web developer based in Addis
                Ababa, Ethiopia. With a strong foundation in web design and
                development, I'm dedicated to delivering exceptional digital
                solutions.
              </p>
              <Button name={"Download CV"} />
            </div>

            {/* Services */}
            <div className="flex flex-col gap-5">
              {services.map((service) => (
                <div key={service.id}>
                  <div className="flex justify-between mb-1 text-xs font-bold lg:text-sm xl:text-md capitalize">
                    <span>{service.title}</span>
                    <span>{service.skillLevel}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full">
                    <div
                      className="p-1 rounded-full progress-bar grad-animate "
                      style={{
                        width: `${service.skillLevel}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      {/* Statistics */}
      <motion.section
        className="text-slate-400 grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 md:justify-items-center md:gap-0 justify-items-center"
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        {statistics.map((stat) => {
          const Icon = eval(stat.icon);
          return (
            <div key={stat.name} className="flex gap-3">
              <Icon size={30} className="mt-2" />
              <div>
                <p className="text-2xl font-black">
                  {stat.count}
                  {stat.name === "Projects Completed" && (
                    <span className="text-sm align-start relative bottom-2">
                      +
                    </span>
                  )}
                </p>
                <p className="text-sm capitalize md:text-xs md:font-bold">
                  {stat.name}
                </p>
              </div>
            </div>
          );
        })}
      </motion.section>
    </Section>
  );
}
