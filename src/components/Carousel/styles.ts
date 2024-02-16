import styled from 'styled-components'
import { Swiper } from 'swiper/react'

const BACKGROUND_SWIPER = {
  none: 'none',
  blue: 'light_blue',
} as const

type CustomSwiperProps = {
  background: keyof typeof BACKGROUND_SWIPER
}

export const Image = styled.img`
  width: 100%;
  min-width: 250px;
  object-fit: cover;
`

export const CustomSwiper = styled(Swiper)<CustomSwiperProps>`
  padding: 32px 50px;
  background: ${(props) =>
    props.background === 'none'
      ? 'none'
      : props.theme.colors[BACKGROUND_SWIPER[props.background]]};
  border-radius: 10px;
`
