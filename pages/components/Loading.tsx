import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { primaryFont } from '..'

const LoadingScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--dark);
  gap: 1rem;
`

const Loading = () => {
  return (
    <LoadingScreen>
      <motion.div
        style={{
          width: '0',
          height: '1px',
          background:
            'linear-gradient(225deg, var(--secondary) 25%, var(--primary))',
        }}
        animate={{
          width: ['20%', '40%', '60%', '80%', '100%'],
        }}
        transition={{
          duration: 2,
        }}
      />
      <h4 className={primaryFont.className}>Loading...</h4>
    </LoadingScreen>
  )
}

export default Loading
