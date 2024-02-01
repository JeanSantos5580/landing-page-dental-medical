import * as S from '../BannerAdvantages/styles'
import image from '../../assets/imageProduct02.png'
import { MainTitle } from '../MainTitle'
import { Button } from '../Button'

export function BannerAdvantages() {
  const advantages = [
    'Top quality dental team',
    'State of the art dental services',
    'Discount on all dental treatment',
    'Enrollment is quick and easy',
  ]

  return (
    <S.BannerAdvantagesContainer>
      <S.BannerImage>
        <img src={image} alt="" />
      </S.BannerImage>
      <S.Main>
        <MainTitle
          title="Why choose Smile for all your dental treatments?"
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        {advantages.map((advantage) => (
          <S.Advantage key={advantage}>
            <S.IconShield />
            <small>{advantage}</small>
          </S.Advantage>
        ))}
        <S.ContainerButton>
          <Button title="Book an appointment" />
        </S.ContainerButton>
      </S.Main>
    </S.BannerAdvantagesContainer>
  )
}
