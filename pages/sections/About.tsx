import styled from '@emotion/styled'
import Animation from '../components/Animation'
import Container from '../components/Container'
import { mq } from '../constants'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  display: grid;
  align-content: center;
`

const Name = styled.h2`
  font-size: 4rem;
  line-height: 1.3;
  margin-top: 1rem;
  ${mq[0]} {
    font-size: 2.3rem;
  }
`

const Tag = styled.h2`
  font-size: 5rem;
  line-height: 1.3;
  background-image: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  display: inline-block;
  margin-bottom: 1rem;
  ${mq[0]} {
    font-size: 3.5rem;
  }
`

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 45rem;
  ${mq[0]} {
    max-width: 100%;
  }
`

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Animation start={{ translateY: -50 }} stop={{ translateY: 0 }}>
          <Text>Hello, my name is</Text>
        </Animation>
        <Animation
          start={{ translateX: -100 }}
          stop={{ translateX: 0 }}
          delay={0.5}
        >
          <Name>Carmelo Pullara</Name>
        </Animation>
        <Animation
          start={{ translateX: 100 }}
          stop={{ translateX: 0 }}
          delay={1}
        >
          <Tag>Front-End Engineer</Tag>
        </Animation>
        <Animation
          start={{ translateY: 100 }}
          stop={{ translateY: 0 }}
          delay={1.5}
        >
          <Text>
            With over a decade of experience in creating visually appealing and
            intuitive digital experiences for a diverse range of clients,
            including startups and large companies. My focus is on building
            accessible, user-centered products that are designed with the
            end-user in mind.
          </Text>
        </Animation>
      </Container>
    </AboutSection>
  )
}

export default About
