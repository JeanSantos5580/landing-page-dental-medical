import { ReactNode } from 'react'
import { Button, Card, Icon } from './styles'
import { CaretCircleRight } from '@phosphor-icons/react'

type Props = {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <h4>{title}</h4>
      <small>{description}</small>
      <Button>
        Learn more <CaretCircleRight size={24} weight="light" />
      </Button>
    </Card>
  )
}
