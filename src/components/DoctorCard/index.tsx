import * as S from '../DoctorCard/styles'

type Props = {
  src: string
}

export function DoctorCard({ src }: Props) {
  return (
    <S.DoctorCardContainer>
      <img src={src} alt="" />
    </S.DoctorCardContainer>
  )
}
