import { Dispatch, SetStateAction } from "react"
import { motion } from 'framer-motion'
import ButtonBase from '@mui/material/ButtonBase'

interface Props {
  isOpen: boolean
  toggleMenu: () => void
}
const MenuButton = ({ toggleMenu, isOpen }: Props) => {
  const values = {
    z_rotate: 45,
    y_translate: 8
  }
  const variants = {
    topOpen: { rotateZ: values.z_rotate, y: values.y_translate },
    topClose: { rotateY: 0 },
    midOpen: { opacity: 0 },
    midClose: { opacity: 1 },
    botOpen: { rotateZ: -values.z_rotate, y: -values.y_translate },
    botClose: { rotateZ: 0 },
  };
  const transition = { duration: .15 }

  return (
    <ButtonBase onClick={toggleMenu} className="grid place-content-center md:hidden rounded-md w-14 h-12">
      <div className='flex flex-col gap-1'>
        <motion.div
          variants={variants}
          initial="topClose"
          animate={isOpen ? "topOpen" : "topClose"}
          transition={transition}
          className="w-8 border border-zinc-400 h-1 bg-zinc-400 rounded-md"
        />
        <motion.div
          variants={variants}
          initial="midClose"
          animate={isOpen ? "midOpen" : "midClose"}
          transition={{ duration: .1 }}
          className="w-8 border border-zinc-400 h-1 bg-zinc-400 rounded-md"
        />
        <motion.div
          variants={variants}
          initial="botClose"
          animate={isOpen ? "botOpen" : "botClose"}
          className="w-8 border border-zinc-400 h-1 bg-zinc-400 rounded-md"
          transition={transition}
        />
      </div>
    </ButtonBase>
  )
}

export default MenuButton