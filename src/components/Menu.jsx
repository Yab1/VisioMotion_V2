// Importing icons from the 'react-bootstrap-icons' library.
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Menu({ tabs, activeTab, setActiveTabState }) {
  const [open, setOpen] = useState(false);

  const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      className={
        "py-5 box-border w-full relative z-50 flex flex-col menu-container transition-all linear duration-500 lg:hidden " +
        (open ? "bg-slate-950 h-screen " : "bg-transparent")
      }
    >
      <label htmlFor="check" onChange={() => setOpen(!open)}>
        <input type="checkbox" id="check" />
        <span className="top-bread"></span>
        <span className="burger"></span>
        <span className="bottom-bread"></span>
      </label>
      <AnimatePresence>
        {open ? (
          <motion.nav className="flex-1 flex items-center text-violet-800 p-10">
            <ul className="menu-list flex flex-col gap-3">
              {tabs.map((tab, index) => (
                <div key={tab} className="flex items-center gap-2">
                  {index === activeTab ? (
                    <span className="active h-4 border bg-white"></span>
                  ) : null}
                  <li
                    className={
                      "capitalize font-medium text-lg " +
                      " " +
                      (index === activeTab ? "text-slate-50" : "null")
                    }
                  >
                    <a
                      href={`#${tab}`}
                      onClick={() => setActiveTabState(index)}
                    >
                      {tab}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
