import { motion, MotionStyle, useAnimation } from 'framer-motion'
import { FC, ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  start: Record<string, number>
  stop: Record<string, number>
  delay?: number
  duration?: number
  children?: ReactNode
  style?: MotionStyle
}

const Animation: FC<Props> = ({
  start,
  stop,
  duration = 1,
  delay,
  style,
  children,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('to')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="from"
      style={style}
      variants={{
        from: {
          opacity: 0,
          ...start,
        },
        to: {
          opacity: 1,
          ...stop,
          transition: { duration, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Animation
