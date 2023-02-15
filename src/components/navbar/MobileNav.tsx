import React, { MouseEventHandler } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ButtonBase } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  links: string[]
  setIsOpen: (status: boolean) => void
}

const MobileNav = ({ links, setIsOpen }: Props) => {
  const router = useRouter()
  const variants = {
    open: { opacity: 1, height: "auto" },
    close: { opacity: 0, height: 0 }
  }
  const navigate = (path: string) => {
    setTimeout(() => {
      setIsOpen(false)
      router.push(path)
    }, 200)
  }
  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      className='h-52 w-full overflow-hidden font-semibold text-zinc-300'
    >
      <hr className='border-[#ffffff40] w-[95%] mx-auto' />
      {
        links.map(link =>
          <ButtonBase key={link} onClick={() => navigate("/")} className="w-full p-2 rounded-md transition-colors">
            {link}
          </ButtonBase>
        )
      }
    </motion.nav>
  )
}

export default MobileNav