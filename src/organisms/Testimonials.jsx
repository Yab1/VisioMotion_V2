// React imports
import React, { useState, useEffect, useRef } from "react";

// Data import
import data from "../stores/data.json";

// Framer Motion imports
import { motion } from "framer-motion";

// Component imports
import Title from "../components/Title";
import Section from "../components/Section";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [width, setWidth] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  useEffect(() => {
    setTestimonials(data.testimonials);
  }, []);

  useEffect(() => {
    let scrollPosition = 0;
    let currentActiveTab = 0;
    const setScrollInterval = setInterval(() => {
      scrollPosition += carousel.current.offsetWidth;
      if (scrollPosition > width) {
        scrollPosition = 0;
      }

      currentActiveTab = (currentActiveTab + 1) % testimonials.length;
      setActiveTab(testimonials[currentActiveTab].id);

      carousel.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 4000);

    return () => {
      clearInterval(setScrollInterval);
    };
  }, [width]);

  return (
    <React.Fragment>
      <Section>
        <Title title={"Clients & Reviews"} />
        <motion.div
          ref={carousel}
          className="overflow-x-auto hide-scrollbar py-1 md:py-10"
        >
          <motion.div
            drag="x"
            style={{ touchAction: "none" }}
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            {testimonials.map((person) => (
              <div
                key={person.id}
                id={person.id}
                className="min-w-full px-5 md:px-20"
              >
                <img
                  src={person.image}
                  alt="testimonial"
                  className="mx-auto mb-2 pointer-event-none w-28 md:w-32 lg:w-36 border-4 border-slate-400 aspect-square rounded-full"
                />
                <p className="capitalize text-slate-900 text-lg font-bold text-center">
                  {person.name}
                </p>
                <p className="text-slate-600 text-center text-sm capitalize mb-3">
                  {person.designation}
                </p>
                <span className="relative before:absolute before:w-9 before:aspect-square before:bg-slate-50 before:rotate-45 flex justify-center before:beautiful-shadow"></span>
                <div className="text-xs md:text-base bg-slate-50 rounded-xl p-3 md:p-5 beautiful-shadow relative z-10">
                  <p>{person.testimonialText}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="flex gap-2 justify-center">
          {testimonials.map((person) => (
            <span
              id={person.id}
              key={person.id}
              className={
                "flex w-2 h-2 rounded-full" +
                " " +
                (person.id === activeTab ? "bg-violet-800" : "bg-slate-400") +
                " " +
                (person.id === activeTab ? "w-4 h-2" : "w-2 h-2")
              }
            ></span>
          ))}
        </div>
      </Section>
    </React.Fragment>
  );
}
