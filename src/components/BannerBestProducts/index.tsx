import {
  BannerImage,
  ContactFormContainer,
  ContainerButton,
  ImageDuplicateBackground,
  Main,
} from './styles'
import { Button } from '../Button'
import image from '../../assets/imageProduct.png'
import { MainTitle } from '../MainTitle'

export function BannerBestProducts() {
  return (
    <ContactFormContainer>
      <Main>
        <MainTitle
          title="Leave your worries at the door and enjoy a healthier, more precise
          smile"
          description="We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself."
        />
        <ContainerButton>
          <Button title="Book an appointment" />
        </ContainerButton>
      </Main>
      <BannerImage>
        <ImageDuplicateBackground />
        <img src={image} alt="" />
      </BannerImage>
    </ContactFormContainer>
  )
}
