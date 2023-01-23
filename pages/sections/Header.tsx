import { Anonymous_Pro } from '@next/font/google'
import styled from '@emotion/styled'

export const monoFont = Anonymous_Pro({ subsets: ['latin'], weight: '400' })

const HeaderWrapper = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 5rem;
  width: 100%;
`

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 2.5rem;
`

const Link = styled.a`
  color: var(--white);
  counter-increment: item 1;
  text-transform: lowercase;
  transition: 0.5s linear;
  font-size: 0.9rem;
  &:before {
    content: '0' counter(item) '.';
    margin-right: 5px;
    background-image: linear-gradient(
      225deg,
      var(--primary) 25%,
      var(--secondary)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  &:hover span:after {
    width: 100%;
  }
  > span {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      height: 1px;
      bottom: -0.5rem;
      background-image: linear-gradient(
        225deg,
        var(--primary) 25%,
        var(--secondary)
      );
      transition: all 0.3s ease;
    }
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

export const Header = () => {
  return (
    <HeaderWrapper className={monoFont.className}>
      <h3>C.</h3>
      <Menu>
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            <span>{link.label}</span>
          </Link>
        ))}
      </Menu>
    </HeaderWrapper>
  )
}
