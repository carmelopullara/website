import styled from '@emotion/styled'
import { ReactElement } from 'react'
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather'
import Animation from '../components/Animation'
import { mq } from '../constants'

interface Link {
  href: string
  icon: ReactElement
}

const links: Link[] = [
  {
    href: 'https://github.com/carmelopullara',
    icon: <GitHub />,
  },
  {
    href: 'https://linkedin.com/in/carmelopullara',
    icon: <Linkedin />,
  },
  {
    href: 'https://twitter.com/carmelopullara',
    icon: <Twitter />,
  },
  {
    href: 'mailto:carmelo@pullara.me',
    icon: <Mail />,
  },
]

const List = styled.div`
  position: fixed;
  bottom: 0;
  left: 5rem;
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  ${mq[3]} {
    display: none;
  }
  &:after {
    content: '';
    width: 1px;
    background-color: var(--white);
    position: absolute;
    right: calc(0.6rem + 1px);
    height: 4rem;
    bottom: 0;
    z-index: -1;
  }
`

const Icon = styled.div`
  &:hover  {
    svg {
      color: var(--secondary);
      transform: scale(1.1);
    }
  }
  svg {
    height: 1.2rem;
    transition: all 0.3s ease;
  }
`

const Sidebar = () => {
  return (
    <List>
      {links.map((link, index) => (
        <Animation
          start={{ translateX: -20 }}
          stop={{ translateX: 0 }}
          key={index}
          duration={0.5}
          delay={(index + 1) * 0.25}
        >
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            <Icon>{link.icon}</Icon>
          </a>
        </Animation>
      ))}
    </List>
  )
}

export default Sidebar
