import { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'

interface Props {
  toggleMenu: MouseEventHandler
  isOpen: boolean
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
  return (
    <button onClick={toggleMenu} className="grid place-content-center h-10 w-10 md:hidden">
      <div className='space-y-1'>
        <motion.div
          variants={variants}
          initial="topClose"
          animate={isOpen ? "topOpen" : "topClose"}
          className="w-8 border border-accent#1 h-1 bg-accent#1 rounded-md"
        />
        <motion.div
          variants={variants}
          initial="midClose"
          animate={isOpen ? "midOpen" : "midClose"}
          transition={{ duration: .1 }}
          className="w-8 border border-accent#1 h-1 bg-accent#1 rounded-md"
        />
        <motion.div
          variants={variants}
          initial="botClose"
          animate={isOpen ? "botOpen" : "botClose"}
          className="w-8 border border-accent#1 h-1 bg-accent#1 rounded-md"
        />
      </div>
    </button>
  )
}

export default MenuButton