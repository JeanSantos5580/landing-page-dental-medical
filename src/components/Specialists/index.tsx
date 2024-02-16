import * as S from '../Specialists/styles'
import { DoctorCard } from '../DoctorCard'
import { MainTitle } from '../MainTitle'
import doctor01 from '../../assets/doctors/doctor01.png'
import doctor02 from '../../assets/doctors/doctor02.png'
import doctor03 from '../../assets/doctors/doctor03.png'
import doctor04 from '../../assets/doctors/doctor04.png'
import { Carousel } from '../Carousel'

export function Specialists() {
  const doctorCards = [
    {
      src: doctor01,
      name: 'Jim Carry',
      assignment: 'Orthodontist.',
    },
    {
      src: doctor02,
      name: 'Wade Warren',
      assignment: 'Endodontist.',
    },
    {
      src: doctor03,
      name: 'Jenny Wilson',
      assignment: 'Periodontist.',
    },
    {
      src: doctor04,
      name: 'Jacob Jones',
      assignment: 'Pediatric Dentist.',
    },
  ]
  return (
    <S.SpecialistsContainer>
      <MainTitle
        align="center"
        title="Meet our specialists"
        description="We use only the best quality materials on the market in order to provide the best products to our patients."
      />

      <Carousel>
        {doctorCards.map((doctor, key) => (
          <DoctorCard src={doctor.src} key={key} />
        ))}
      </Carousel>
    </S.SpecialistsContainer>
  )
}
