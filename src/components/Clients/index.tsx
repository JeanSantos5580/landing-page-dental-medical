import * as S from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { MainTitle } from '../MainTitle'
import { CommentCard } from '../CommentCard'
import avatar03 from '../../assets/avatar03.png'
import avatar04 from '../../assets/avatar04.png'
import avatar05 from '../../assets/avatar05.png'

export function Clients() {
  return (
    <S.ClientsContainer>
      <MainTitle
        align="center"
        title="Our Happy Clients"
        description="We use only the best quality materials on the market in order to provide the best products to our patients."
      />
      <S.Carousel>
        <S.Cards>
          <CommentCard
            path={avatar03}
            name="Thomas daniel"
            comment="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
          />
          <CommentCard
            path={avatar04}
            name="Alena Alex  "
            comment="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
          />
          <CommentCard
            path={avatar05}
            name="Thomas Edison"
            comment="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
          />
        </S.Cards>
        <S.Buttons>
          <S.Button>
            <CaretLeft size={32} weight="light" />
          </S.Button>
          <S.Button>
            <CaretRight size={32} weight="light" />
          </S.Button>
        </S.Buttons>
      </S.Carousel>
    </S.ClientsContainer>
  )
}
