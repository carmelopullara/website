import styled from '@emotion/styled'
import { FC } from 'react'
import Animation from './Animation'
import { monoFont } from './Header'

interface Props {
  title: string
  number: string
}

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    font-family: ${monoFont.style.fontFamily};
    position: relative;
    content: attr(data-number) '.';
    margin-right: 0.5rem;
    color: var(--primary);
    background-image: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 400;
  }
`

const SectionTitle: FC<Props> = ({ title, number }) => {
  return (
    <Animation start={{ translateX: 100 }} stop={{ translateX: 0 }}>
      <Title data-number={number}>{title}</Title>
    </Animation>
  )
}

export default SectionTitle
