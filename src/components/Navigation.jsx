// Importing the motion module from "framer-motion" for animations.
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header({ open, menuController }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    "home",
    "about",
    "services",
    "experience",
    "works",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tabsOffsets = tabs.map((item) => {
        const element = document.getElementById(item);
        console.log(element.offsetTop);
        return {
          name: item,
          offsetTop: element.offsetTop,
        };
      });
      const activeTabIndex = tabsOffsets.findIndex(
        (item) => item.offsetTop > scrollY + 100
      );
      setActiveTab(
        activeTabIndex === -1 ? tabs.length - 1 : activeTabIndex - 1
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
      },
    },
    tab: {
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const liVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    // desktop header
    <header
      id="header"
      className={
        "py-2.5 w-full border-slate-400 md:px-10 lg:px-24 xl:px-60 bg-transparent hidden lg:block transition-colors linear duration-200 " +
        (tabs[activeTab] === "home" ? "text-slate-50" : "text-slate-950")
      }
    >
      <div className="flex justify-between px-2.5">
        {/* logo text  */}
        <motion.h1
          className="font-black text-2xl align-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Yeabsera<span className="font-black text-2xl text-rose-600">.</span>
        </motion.h1>
        {/* Navigation Laptop */}
        <motion.nav
          className="hidden lg:block"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.ul className="flex gap-8" variants={ulVariants}>
            {tabs.map((nav, index) => (
              <motion.li
                key={nav}
                title={nav}
                className={
                  "capitalize my-2" +
                  " " +
                  (index === activeTab ? "text-violet-500" : "null")
                }
                variants={liVariants}
              >
                <a href={`#${nav}`}>{nav}</a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </header>
  );
}
