import styled from '@emotion/styled'
import { Anonymous_Pro } from '@next/font/google'
import { mq } from '../lib/mediaQueries'
import Animation from './Animation'
import Container from './Container'

export const monoFont = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400'],
})

const HeaderWrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 5rem;
  width: 100%;
  ${mq[1]} {
    display: none;
  }
`

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 2.5rem;
`

const Text = styled.span`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    height: 1px;
    bottom: -0.5rem;
    background-image: var(--gradient);
    transition: all 0.3s ease;
  }
`

const Counter = styled.span`
  margin-right: 5px;
  background-image: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  cursor: default;
`

const Link = styled.a`
  color: var(--white);
  counter-increment: item 1;
  text-transform: lowercase;
  transition: 0.5s linear;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  &:hover span:after {
    width: 100%;
  }
`

interface HeaderLink {
  label: string
  href: string
}

const links: HeaderLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  return (
    <HeaderWrapper className={monoFont.className}>
      <Container>
        <Menu>
          {links.map((link, index) => (
            <Animation
              start={{ scale: 0 }}
              stop={{ scale: 1 }}
              key={link.label}
              duration={0.5}
              delay={index * 0.3}
            >
              <Link href={link.href}>
                <Counter>{`0${index + 1}`}.</Counter>
                <Text>{link.label}</Text>
              </Link>
            </Animation>
          ))}
        </Menu>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
