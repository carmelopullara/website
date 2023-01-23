import styled from '@emotion/styled'
import { Container } from '../shared/Container'
import { monoFont } from './Header'

const AboutSection = styled.section`
  height: 100vh;
  padding: 100px 25px 25px;
  display: flex;
  align-items: center;
  position: relative;
`

const Name = styled.h2`
  font-size: 2.5rem;
`

const MainTag = styled.h2`
  font-size: 4.5rem;
`

export const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <h4 className={monoFont.className}>Hello, my name is</h4>
        <Name>Carmelo Pullara</Name>
        <MainTag>Front-End Developer</MainTag>
        <p>
          Senior frontend engineer with over a decade of experience building
          nice things for good people.
        </p>
      </Container>
    </AboutSection>
  )
}
