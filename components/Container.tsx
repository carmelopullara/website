import styled from '@emotion/styled'
import { FC } from 'react'

const StyledContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
`

type Props = {
  children?: React.ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
