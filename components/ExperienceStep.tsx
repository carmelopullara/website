import { css } from '@emotion/css'
import { motion, useAnimation } from 'framer-motion'
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children?: React.ReactNode
  start: number
  delay: number
}

const ExperienceStep: FC<Props> = ({ children, start, delay }) => {
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
      className={css`
        border-left: 1px solid var(--primary);
        border-right: 1px solid var(--secondary);
        background-image: var(--gradient), var(--gradient);
        background-size: 100% 1px;
        background-position: 0 0, 0 100%;
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        padding: 3rem;
      `}
      variants={{
        from: { opacity: 0, translateX: start },
        to: {
          opacity: 1,
          translateX: 0,
          transition: { duration: 1, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default ExperienceStep
