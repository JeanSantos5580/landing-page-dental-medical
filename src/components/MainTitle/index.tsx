import { HTMLAttributes } from 'react'
import { MainTitleContainer } from './styles'

type Props = HTMLAttributes<HTMLSpanElement> & {
  title: string
  description: string
  align?: 'left' | 'center' | 'right'
  color?: string
}

export function MainTitle({
  title,
  description,
  align = 'left',
  color,
  ...rest
}: Props) {
  return (
    <MainTitleContainer align={align} {...rest}>
      <h2 style={{ color: `${color}` }}>{title}</h2>
      <small style={{ color: `${color}` }}>{description}</small>
    </MainTitleContainer>
  )
}
