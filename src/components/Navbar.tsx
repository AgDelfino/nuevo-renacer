import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)

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

      <div className="space-y-1 p-5 pr-7 md:hidden">
        <div className="w-8 border border-accent#1 h-1 bg-accent#1" />
        <div className="w-8 border border-accent#1 h-1 bg-accent#1" />
        <div className="w-8 border border-accent#1 h-1 bg-accent#1" />
      </div>
    </div>
  );
};

export default Navbar;
