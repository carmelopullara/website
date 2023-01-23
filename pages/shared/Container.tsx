import styled from '@emotion/styled'
import { FC } from 'react'

const StyledContainer = styled.div`
  width: var(--max-width);
  margin: auto;
`

type Props = {
  children?: React.ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}
