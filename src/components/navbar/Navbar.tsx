import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import MenuButton from "./MenuButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full bg-neutral-800 shadow-sm shadow-zinc-600 overflow-hidden">
        <div className="mx-auto h-16 max-w-main w-[95%] sticky flex justify-between items-center">
          <motion.h1
            className="w-full font-barieta text-xl text-accent#2 font-bold first-letter:font-serif first-letter:text-amber-600 first-letter:text-2xl first-letter:font-extralight"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .7, ease: "anticipate" }}
          >
            Nuevo Renacer
          </motion.h1>

          <motion.nav
            className="hidden md:flex gap-6 font-semibold  text-zinc-300"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .7, ease: "anticipate" }}
          >
            <Link href="/">Inicio</Link>
            <Link href="/">Nosotros</Link>
            <Link href="/">Galería</Link>
            <Link href="/">Contáctenos</Link>
          </motion.nav>

          <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

        </div>
      </header >
      <div className="relative overflow-x-hidden">
        <AnimatePresence>
          {isOpen && <MobileNav />}
        </AnimatePresence>
      </div>
    </>
  );
};
