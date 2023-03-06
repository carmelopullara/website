import styled from '@emotion/styled'
import Link from 'next/link'
import { mq } from '../lib/mediaQueries'
import Animation from './Animation'
import { SocialIcon, socialLinks } from './Sidebar'

const year = new Date()

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

const List = styled.div`
  display: none;
  gap: 1rem;
  margin: 1rem 0;
  ${mq[3]} {
    display: flex;
  }
`

const Copyright = styled.p`
  font-size: 1rem;
  > a {
    &:hover {
      background-image: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <List>
        {socialLinks.map((link, index) => (
          <Animation
            start={{ translateY: -20 }}
            stop={{ translateY: 0 }}
            key={index}
            duration={0.5}
            delay={(index + 1) * 0.25}
          >
            <a key={index} href={link.href} target="_blank" rel="noreferrer">
              <SocialIcon>{link.icon}</SocialIcon>
            </a>
          </Animation>
        ))}
      </List>
      <Copyright>
        &copy; {year.getFullYear()} Carmelo Pullara - VAT 02908650845
      </Copyright>
      <br />
      <Copyright>
        <Link
          href="https://github.com/carmelopullara/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small>The code for this website is open source</small>
        </Link>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
