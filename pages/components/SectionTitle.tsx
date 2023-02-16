import styled from '@emotion/styled'
import { FC } from 'react'
import { monoFont } from '../sections/Header'
import Animation from './Animation'

interface Props {
  title: string
  number: string
}

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    font-family: ${monoFont.style.fontFamily};
    position: relative;
    content: attr(data-number) '.';
    margin-right: 0.5rem;
    color: var(--primary);
    font-weight: 400;
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    top: 1px;
    margin-left: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
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
