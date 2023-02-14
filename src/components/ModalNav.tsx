import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

type Props = {isOpen: Boolean}

const ModalNav = ({isOpen}: Props) => {

    const variants = {
        open: {x:0, opacity: 1},
        close: {x: 300, opacity: 0}
    }

  return (
    <motion.div 
    variants={variants}
    initial="close"
    animate={isOpen ? "open" : "close"}
    className='h-52 w-[90%] text-center bg-main absolute top-32 left-5 flex flex-col justify-evenly items-center'> 
        <Link href="/">Inicio</Link>
        <Link href="/">Nosotros</Link>
        <Link href="/">Galería</Link>
        <Link href="/">Contáctenos</Link>
    </motion.div>
  )
}

export default ModalNav