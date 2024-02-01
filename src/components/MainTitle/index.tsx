import { MainTitleContainer } from './styles'

type Props = {
  title: string
  description: string
  align?: 'left' | 'center' | 'right'
}

export function MainTitle({ title, description, align = 'left' }: Props) {
  return (
    <MainTitleContainer align={align}>
      <h2>{title}</h2>
      <small>{description}</small>
    </MainTitleContainer>
  )
}
