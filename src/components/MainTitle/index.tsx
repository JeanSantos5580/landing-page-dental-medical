import { HTMLAttributes } from 'react'
import { MainTitleContainer } from './styles'

type Props = HTMLAttributes<HTMLSpanElement> & {
  title: string
  description: string
  align?: 'left' | 'center' | 'right'
}

export function MainTitle({
  title,
  description,
  align = 'left',
  ...rest
}: Props) {
  return (
    <MainTitleContainer align={align} {...rest}>
      <h2>{title}</h2>
      <small>{description}</small>
    </MainTitleContainer>
  )
}
