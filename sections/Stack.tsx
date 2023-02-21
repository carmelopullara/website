import styled from '@emotion/styled'
import Animation from '../components/Animation'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import { mq } from '../lib/mediaQueries'

interface Item {
  name: string
  color: string
}

const items: Item[] = [
  { name: 'JavaScript', color: '#2695FF' },
  { name: 'React', color: '#2E8FFD' },
  { name: 'TypeScript', color: '#3588FA' },
  { name: 'Node.js', color: '#3D82F8' },
  { name: 'HTML', color: '#447BF6' },
  { name: 'CSS', color: '#447BF6' },
  { name: 'Next.js', color: '#4C75F4' },
  { name: 'GraphQL', color: '#536EF1' },
  { name: 'Three.js', color: '#5B68EF' },
  { name: 'Cypress', color: '#6261ED' },
  { name: 'Redux', color: '#6A5BEB' },
  { name: 'MobX', color: '#7154E8' },
  { name: 'CSS-in-JS', color: '#794EE6' },
  { name: 'REST APIs', color: '#8148E4' },
  { name: 'Jest', color: '#8841E1' },
  { name: 'Postman', color: '#903BDF' },
  { name: 'Figma', color: '#9734DD' },
  { name: 'Git', color: '#9F2EDB' },
  { name: 'VSCode', color: '#A627D8' },
  { name: 'AWS', color: '#AE21D6' },
  { name: 'Google Cloud', color: '#B51AD4' },
  { name: 'Vercel', color: '#BD14D2' },
  { name: 'Netlify', color: '#C40DCF' },
  { name: 'Firebase', color: '#CC07CD' },
]

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-gap: 1rem;
  margin: auto;
  justify-content: center;
`

const Element = styled.div<{ $color: string }>`
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  transition: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 2px solid ${(props) => props.$color};
  color: ${(props) => props.$color};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.$color};
    color: #fff;
  }
`

const Abbr = styled.h3`
  font-weight: 700;
`

const ItemName = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
`

const FirstSpacer = styled.div`
  grid-column: 3 / span 4;
  grid-row: 1;
  ${mq[2]} {
    grid-column: 2 / span 3;
  }
  ${mq[1]} {
    display: none;
  }
`

const SecondSpacer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 4;
  ${mq[2]} {
    grid-column: 1 / span 2;
    grid-row: 5;
  }
  ${mq[1]} {
    display: none;
  }
`

const getAbbreviation = (value: string) => {
  switch (value) {
    case 'JavaScript':
      return 'JS'
    case 'TypeScript':
      return 'TS'
    default:
      return value.substring(0, 2)
  }
}

const Stack = () => {
  return (
    <Section id="stack">
      <Container>
        <SectionTitle title="Stack" number="03" />
        <Table>
          <FirstSpacer />
          <SecondSpacer />
          {items.map((item, index) => (
            <Animation
              start={{ scale: 0.7 }}
              stop={{ scale: 1 }}
              duration={0.5}
              delay={(index / 4) * 0.15}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(5px)',
              }}
              key={item.name}
            >
              <Element $color={item.color}>
                <Abbr>{getAbbreviation(item.name)}</Abbr>
                <ItemName>{item.name}</ItemName>
              </Element>
            </Animation>
          ))}
        </Table>
      </Container>
    </Section>
  )
}

export default Stack
