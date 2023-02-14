import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ModalNav from "./ModalNav";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    topOpen: { rotateZ: 45, y: 8 },
    topClose: { rotateY: 0 },
    midOpen: { opacity: 0 },
    midClose: { opacity: 1 },
    botOpen: { rotateZ: -45, y: -8 },
    botClose: { rotateZ: 0 },
  };

  const handleHamb = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-28 bg-main w-full sticky flex justify-between items-center">
      <motion.div
        className="p-5 pl-0 md:pl-5"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className="w-28 h-28"
          src={require("@/assets/logo.png").default}
          width={500}
          height={500}
          alt="logo"
        />
      </motion.div>

      <motion.div
        className="p-5 md:w-1/2 lg:w-1/3 md:flex justify-evenly font-semibold hidden text-accent#1"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Link href="/">Inicio</Link>
        <Link href="/">Nosotros</Link>
        <Link href="/">Galería</Link>
        <Link href="/">Contáctenos</Link>
      </motion.div>

      <div onClick={handleHamb} className="space-y-1 p-5 pr-7">
        <motion.div
          variants={variants}
          initial="topClose"
          animate={isOpen ? "topOpen" : "topClose"}
          className="w-8 border border-accent#1 h-1 bg-accent#1"
        />
        <motion.div
          variants={variants}
          initial="midClose"
          animate={isOpen ? "midOpen" : "midClose"}
          transition={{duration: 0}}
          className="w-8 border border-accent#1 h-1 bg-accent#1"
        />
        <motion.div
          variants={variants}
          initial="botClose"
          animate={isOpen ? "botOpen" : "botClose"}
          className="w-8 border border-accent#1 h-1 bg-accent#1"
        />
      </div>

      <AnimatePresence>
        <ModalNav isOpen={isOpen} />
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
