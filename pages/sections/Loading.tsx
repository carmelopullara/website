import styled from '@emotion/styled'

const LoadingScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
`

const Loading = () => {
  return <LoadingScreen>Ciao</LoadingScreen>
}

export default Loading
