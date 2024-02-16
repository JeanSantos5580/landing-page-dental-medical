import * as S from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { MainTitle } from '../MainTitle'
import { CommentCard } from '../CommentCard'
import avatar03 from '../../assets/avatar03.png'
import avatar04 from '../../assets/avatar04.png'
import avatar05 from '../../assets/avatar05.png'
import { Carousel } from '../Carousel'

export function Clients() {
  const commentCards = [
    {
      path: avatar03,
      name: 'Thomas daniel',
      comment:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
    {
      path: avatar04,
      name: 'Alena Alex',
      comment:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
    {
      path: avatar05,
      name: 'Thomas Edison',
      comment:
        'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
  ]
  return (
    <S.ClientsContainer>
      <MainTitle
        align="center"
        title="Our Happy Clients"
        description="We use only the best quality materials on the market in order to provide the best products to our patients."
      />

      <Carousel>
        {commentCards.map((comment, key) => (
          <CommentCard
            key={key}
            path={comment.path}
            name={comment.name}
            comment={comment.comment}
          />
        ))}
      </Carousel>
    </S.ClientsContainer>
  )
}
