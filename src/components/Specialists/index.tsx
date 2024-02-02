import * as S from '../Specialists/styles'
import { DoctorCard } from '../DoctorCard'
import { MainTitle } from '../MainTitle'
import doctor01 from '../../assets/doctors/doctor01.png'
import doctor02 from '../../assets/doctors/doctor02.png'
import doctor03 from '../../assets/doctors/doctor03.png'
import doctor04 from '../../assets/doctors/doctor04.png'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Specialists() {
  return (
    <S.SpecialistsContainer>
      <MainTitle
        align="center"
        title="Meet our specialists"
        description="We use only the best quality materials on the market in order to provide the best products to our patients."
      />
      <S.Carousel>
        <S.Cards>
          <DoctorCard
            src={doctor01}
            name="Jim Carry"
            assignment="Orthodontist."
          />
          <DoctorCard
            src={doctor02}
            name="Wade Warren"
            assignment="Endodontist."
          />
          <DoctorCard
            src={doctor03}
            name="Jenny Wilson"
            assignment="Periodontist."
          />
          <DoctorCard
            src={doctor04}
            name="Jacob Jones"
            assignment="Pediatric Dentist."
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
    </S.SpecialistsContainer>
  )
}
