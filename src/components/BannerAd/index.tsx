import {
  BannerImage,
  ContactFormContainer,
  ContainerButton,
  Main,
} from './styles'
import image from '../../assets/ad.png'
import { Button } from '../Button'
import { MainTitle } from '../MainTitle'

export function BannerAd() {
  return (
    <ContactFormContainer>
      <Main>
        <MainTitle
          style={{ color: '#fff' }}
          align="left"
          title="Dental Website that's gonna shake the game rules up."
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        <ContainerButton>
          <Button title="Learn More" />
        </ContainerButton>
      </Main>
      <BannerImage>
        <img src={image} alt="" />
      </BannerImage>
    </ContactFormContainer>
  )
}
