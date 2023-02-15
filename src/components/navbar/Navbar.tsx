import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import MenuButton from "./MenuButton";
import ButtonBase from "@mui/material/ButtonBase";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [navAlpha, setNavAlpha] = useState(0)

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY === 0) setNavAlpha(0)
      else setNavAlpha(1)
    }
    return () => { window.onscroll = null }
  }, [])
  useEffect(() => {
    if (isOpen) setNavAlpha(1)
    else if (window.scrollY === 0) setNavAlpha(0)
  }, [isOpen])

  const links = ["Inicio", "Nosotros", "Galería", "Contáctenos"]
  return (
    <header className={`w-full ${navAlpha === 1 && "bg-neutral-800"} shadow-neutral-900 z-50 overflow-hidden fixed transition-colors ease-in-out duration-[.4s]`}
    >
      <div className="mx-auto h-16 max-w-main w-[95%] sticky flex justify-between items-center">
        <motion.h1
          className="w-full font-barieta text-xl text-accent#2 font-bold first-letter:font-serif first-letter:text-amber-600 first-letter:text-2xl first-letter:font-extralight mx-1"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .7, ease: "anticipate" }}
        >
          Nuevo Renacer
        </motion.h1>

        <motion.nav
          className="hidden md:flex gap-6 font-semibold text-zinc-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .7, ease: "anticipate" }}
        >
          {
            links.map(link =>
              <Link href="/" key={link}>
                <ButtonBase className="w-full p-2 rounded-md hover:text-amber-500 transition-colors">
                  {link}
                </ButtonBase>
              </Link>
            )
          }
        </motion.nav>

        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      </div>

      <AnimatePresence>
        {isOpen && <MobileNav links={links} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header >
  );
};
