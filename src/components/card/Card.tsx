import mock from "@/assets/abuelos-temp/abuelos-temp-1.jpg"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import {motion} from "framer-motion"

interface Props {
  className?: string
  cover?: StaticImageData
  title: string
  content: string
}

export const Card = ({ className, cover = mock, title, content }: Props) => {
  const [isHovered, setHover] = useState(false)
  return (
    <div className="w-full h-[300px] relative overflow-hidden"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
      <Image src={cover} alt="cover" width={400} height={300}
        className={`h-[300px] w-full object-cover object-center ${isHovered && "scale-[1.2]"} transition-transform duration-300`}
      />
      <div
        className={`absolute top-0 w-full h-full p-4 transition-colors ${!isHovered ? className : "bg-black/40 backdrop-blur-sm"} duration-[.4s] ease-in-out`}
      >
        <div className={`h-full w-full rounded-md border ${!isHovered && "border-transparent"} transition-colors duration-[.5s] text-zinc-100 flex flex-col text-center justify-center gap-y-3 px-2`}>
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}