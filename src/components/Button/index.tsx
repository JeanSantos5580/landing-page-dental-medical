import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>
}
