import React, { MouseEventHandler } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ButtonBase } from '@mui/material'

interface Props {
  links: string[]
  toggleMenu: MouseEventHandler
}

const MobileNav = ({ links, toggleMenu }: Props) => {

  const variants = {
    open: { opacity: 1, height: "auto" },
    close: { opacity: 0, height: 0 }
  }
  return (
    <motion.div
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      className='h-52 w-full overflow-hidden font-semibold text-zinc-300'
    >
      <hr className='border-[#ffffff40] w-[95%] mx-auto' />
      {
        links.map(link =>
          <Link href="/" key={link} onClick={toggleMenu}>
            <ButtonBase className="w-full p-2 rounded-md transition-colors">
              {link}
            </ButtonBase>
          </Link>
        )
      }
    </motion.div>
  )
}

export default MobileNav