import styled from '@emotion/styled'
import Animation from '../components/Animation'
import { Button } from '../components/Button'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'

const Wrapper = styled.div`
  padding: 2rem 0;
  text-align: center;
  width: 40rem;
  max-width: 100%;
  margin: auto;
`

const Title = styled.h3`
  font-size: 2rem;
`

const Text = styled.p`
  font-size: 1.2rem;
  margin: 2rem 0;
`

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle title="Contact" number="04" />
        <Wrapper>
          <Animation start={{ translateY: -100 }} stop={{ translateY: 0 }}>
            <Title>Get In Touch</Title>
          </Animation>
          <Animation start={{ translateX: -100 }} stop={{ translateX: 0 }}>
            <Text>
              Although I&apos;m not looking for new opportunities right
              now, feel free to drop me a message anytime. Whether you have
              a question or just want to say hi, I&apos;ll do my best to reply
              as soon as I can!
            </Text>
          </Animation>
          <Animation start={{ translateY: 100 }} stop={{ translateY: 0 }}>
            <Button href="mailto:carmelo@pullara.me">Say Hi</Button>
          </Animation>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default Contact
