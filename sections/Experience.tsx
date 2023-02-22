import styled from '@emotion/styled'
import ExperienceStep from '../components/ExperienceStep'
import Container from '../components/Container'
import Link from 'next/link'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import { mq } from '../lib/mediaQueries'

interface Step {
  company: string
  url: string
  dates: string
  points: string[]
}

const steps: Step[] = [
  {
    company: 'Veza',
    url: 'https://veza.com',
    dates: '2020-2023',
    points: [
      'Joined as Founding Engineer. Developed the first MVP of the software and scaled it to production for dozens of enterprise customers.',
      'Built and owned multiple core features of the product that lead to sales increase.',
      'Collaborated with different teams including backend engineers, designers and product managers.',
      'Wrote end-to-end and unit tests that significantly increased coverage.',
      // 'Utilized: TypeScript, React, MobX, styled-components, Node.js, Cypress, Jest.',
    ],
  },
  {
    company: 'Toptal',
    url: 'https://toptal.com/',
    dates: '2018-2020',
    points: [
      'Worked on React apps for more than 10 clients, including HealthIQ, Zeidler Group and Cortina Productions.',
      'Built two interactive experiences with React for the National Air and Space Museum of Washington.',
      'Developed an MVP for a Dutch real estate website and implemented it in a Laravel application',
      'Built a series of landing pages for the insurance industry with dynamics, multi-step forms that increased the conversion rate.',
      // 'Utilized Agile methodologies to manage project timelines and deliverables.',
      // 'Utilized: React, Redux, react-dnd, CSS, Node.js, Laravel, Ruby on Rails, Cypress.',
    ],
  },
  {
    company: 'dsire',
    url: 'https://www.dsire.com/',
    dates: '2015-2016',
    points: [
      'Designed and developed different interactive and animated websites for gaming and movie industries.',
      'Worked closely with UX/UI designers and back-end developers to ensure seamless integration and functionality.',
      'Collaborated with project managers to ensure timely delivery of projects within budget constraints.',
      // 'Utilized: WordPress, React, CSS, Node.js.',
    ],
  },
  {
    company: 'Freelance',
    url: 'https://pullara.me/',
    dates: '2012-2017',
    points: [
      'Built a social network for the entertainment industry.',
      'Became Elite Author at Envato and sold premium WordPress themes to over 6000 customers',
      'Provided technical support to a large customer base, responding to inquiries and troubleshooting issues.',
      // 'Utilized: WordPress, PHP, React, CSS, Node.js.',
    ],
  },
]

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ExperienceInfo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  ${mq[0]} {
    font-size: 1.2rem;
  }
`

const CompanyLink = styled(Link)`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -0.2rem;
    height: 1px;
    background-image: var(--gradient);
    width: 100%;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--primary);
    background-image: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-decoration: none;
    &:after {
      width: 0;
    }
  }
`

const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  &:before {
    content: '▹';
    color: var(--primary);
    background-image: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    cursor: default;
    font-size: 1.3rem;
  }
`

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle title="Experience" number="02" />
        <Grid>
          {steps.map((step, index) => (
            <ExperienceStep
              key={step.company}
              delay={0}
              start={index % 2 === 0 ? -200 : 200}
            >
              <Info>
                <ExperienceInfo>
                  <CompanyLink target="_blank" href={step.url}>
                    {step.company}
                  </CompanyLink>
                </ExperienceInfo>
                <ExperienceInfo>{step.dates}</ExperienceInfo>
              </Info>
              <List>
                {step.points.map((point, i) => (
                  <ListItem key={`point-${i}`}>{point}</ListItem>
                ))}
              </List>
            </ExperienceStep>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Experience
