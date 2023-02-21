import styled from '@emotion/styled'

export const Button = styled.a`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2rem;
  border-left: 1px solid var(--primary);
  border-right: 1px solid var(--secondary);
  background-image: var(--gradient), var(--gradient);
  background-size: 100% 1px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-image: var(--gradient);
    z-index: -1;
    transition: all 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`
