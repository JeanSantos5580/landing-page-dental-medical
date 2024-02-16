import {
  Author,
  CardContainer,
  Content,
  Description,
  Tag,
  Title,
} from './styles'

type Props = {
  path: string
  tag: string
  title: string
  description: string
  author: string
}

export function Card({ path, tag, title, description, author }: Props) {
  return (
    <CardContainer>
      <img src={path} alt="" />
      <Content>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Author>{author}</Author>
      </Content>
    </CardContainer>
  )
}
