import * as S from '../VideoDemonstration/styles'
import { MainTitle } from '../MainTitle'
import image from '../../assets/videoDemo.png'
import { Button } from '../Button'

export function VideoDemonstration() {
  return (
    <S.VideoDemonstrationContainer>
      <S.ContainerTitle>
        <MainTitle
          align="center"
          title="We’re welcoming new patients and can’t wait to meet you."
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
      </S.ContainerTitle>
      <S.BannerImage>
        <img src={image} alt="" />
      </S.BannerImage>
      <S.ContainerButton>
        <Button title="Watch Playlist" />
      </S.ContainerButton>
    </S.VideoDemonstrationContainer>
  )
}
