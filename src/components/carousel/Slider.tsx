import { ReactNode, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode
  slides: number
  delay: number
}

const Slider = ({ children, slides, delay }: Props) => {

  const maxSlides = slides
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isStop, setStop] = useState(false)

  const getTranslate = () => {
    return `-${(currentSlide - 1) * 100}%`
  }
  const autoplay = () => {
    if (currentSlide === maxSlides) setCurrentSlide(1)
    else setCurrentSlide(currentSlide + 1)
  }
  const stopTranslate = () => setStop(true)
  const continueTranslate = () => setStop(false)

  //dots controllers
  const getDots = () => {
    return slides
      .toString()
      .repeat(slides)
      .split("")
      .map((_, i: number) => i + 1)
  }
  //autoplay
  useEffect(() => {
    if (isStop) return
    const interval = setTimeout(autoplay, delay * 1000)
    return () => clearTimeout(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, isStop])

  return (
    <section className="overflow-hidden relative">
      <motion.div className="flex"
        animate={{ x: getTranslate() }}
        transition={{ duration: .8 }}
      >{children}</motion.div>

      {/*dots */}
      <div className="absolute w-full bottom-0 flex justify-center text-white">
        <div className="flex gap-x-[10px] py-6">
          {getDots().map(val => (
            <span key={val} onClick={() => setCurrentSlide(val)}
              className={`w-3 h-3 rounded-full
              ${currentSlide === val ? "bg-white/80 scale-[1.2]" : "bg-white/30"} transition-all duration-300`}
            ></span>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Slider