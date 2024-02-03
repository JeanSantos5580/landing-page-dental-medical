import { Button } from '../Button'
import { MainTitle } from '../MainTitle'
import {
  BannerContainer,
  BannerImage,
  ContainerButton,
  BannerMain,
} from './styles'
import image from '../../assets/ad.png'

export function Banner() {
  return (
    <BannerContainer>
      <BannerMain>
        <MainTitle
          color="#fff"
          align="left"
          title="Dental Website that's gonna shake the game rules up."
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        <ContainerButton>
          <Button title="Learn More" />
        </ContainerButton>
      </BannerMain>
      <BannerImage>
        <img src={image} alt="" />
      </BannerImage>
    </BannerContainer>
  )
}
