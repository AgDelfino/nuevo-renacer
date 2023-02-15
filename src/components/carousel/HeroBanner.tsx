import Image from "next/image"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

const HeroBanner = ({ children }: Props) => {
  return <div className="relative min-w-full">
    <Image src={require("@/assets/abuelos-temp/abuelos-temp-1.jpg").default} alt="abuelos"
      width={5760}
      height={3840}
      className="max-h-screen object-cover object-center"
    />
    <div className="absolute z-10 top-0 w-full h-full bg-black/[0.66]">
      {children}
    </div>
  </div>
}
export default HeroBanner