import {
  CommentCardContainer,
  IconStar,
  Info,
  Review,
  UserInfo,
} from './styles'

type Props = {
  path: string
  name: string
  comment: string
}

export function CommentCard({ path, name, comment }: Props) {
  return (
    <CommentCardContainer>
      <UserInfo>
        <img src={path} alt="" />
        <Info>
          <h5>{name}</h5>
          <Review>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </Review>
        </Info>
      </UserInfo>
      <small>{comment}</small>
    </CommentCardContainer>
  )
}
