import styled from '@emotion/styled'
import { ReactElement } from 'react'
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather'

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

const StyledSidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 5rem;
  width: 5rem;
  height: calc(100vh - 5rem);
  z-index: 90;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem 0 4rem;
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

const List = styled.div`
  position: relative;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`

const Icon = styled.div`
  &:hover  {
    svg {
      color: var(--primary);
      transform: scale(1.1);
    }
  }
  svg {
    height: 1.2rem;
    transition: all 0.3s ease;
  }
`

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <List>
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            <Icon>{link.icon}</Icon>
          </a>
        ))}
      </List>
    </StyledSidebar>
  )
}
