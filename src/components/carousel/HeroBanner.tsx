import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import abuelo1 from "@/assets/abuelos-temp/abuelos-temp-1.jpg"

interface Props {
  children?: ReactNode
  className?: string
  cover: StaticImageData
}
// 5760 - 3840
const HeroBanner = ({ children, className, cover = abuelo1 }: Props) => {
  return <div className="relative min-w-full">
    <Image src={cover} alt="abuelos"
      width={2048}
      height={1152}
      className="h-screen object-cover object-center"
    />
    <div className="absolute z-10 top-0 w-full h-full bg-black/[0.66]">
      <div className="mt-16"></div>
      <div className={className + " h-[80vh]"}>{children}</div>
    </div>
  </div>
}
export default HeroBanner