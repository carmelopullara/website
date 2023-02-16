import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FC, ReactNode, useEffect } from 'react'

interface Props {
  start: Record<string, number>
  stop: Record<string, number>
  delay?: number
  duration?: number
  children?: ReactNode
}

const Animation: FC<Props> = ({
  start,
  stop,
  duration = 1,
  delay,
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
