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

  useEffect(() => {
    if (isStop) return
    setTimeout(autoplay, delay * 1000)
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
        <div className="flex gap-x-2 py-4">
          {getDots().map(val => (
            <span key={val}
              className="w-3 h-3 rounded-full bg-white/40"
            ></span>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Slider