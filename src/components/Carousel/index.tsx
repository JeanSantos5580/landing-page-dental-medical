import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { SwiperSlide } from 'swiper/react'

import React, { ReactNode, useEffect, useState } from 'react'
import { CustomSwiper } from './styles'

register()

type Props = {
  children: ReactNode
  background?: 'none' | 'blue'
}

export function Carousel({ children, background = 'none' }: Props) {
  const [slidesPerView, setSlidesPerView] = useState(3)

  function handleResize() {
    if (window.innerWidth < 760) {
      setSlidesPerView(1)
    } else {
      setSlidesPerView(2)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <CustomSwiper
        background={background}
        slidesPerView={slidesPerView}
        spaceBetween={50}
        navigation
        watchOverflow
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide
            style={{ display: 'flex', justifyContent: 'center' }}
            key={index}
          >
            {child}
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  )
}
