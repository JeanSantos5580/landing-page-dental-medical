import * as S from '../DoctorCard/styles'

type Props = {
  src: string
  name: string
  assignment: string
}

export function DoctorCard({ src, name, assignment }: Props) {
  return (
    <S.DoctorCardContainer>
      <img src={src} alt="" />
      <S.IconLinkedIn />
      <S.Assignment>
        <h4>{name}</h4>
        <small>{assignment}</small>
      </S.Assignment>
    </S.DoctorCardContainer>
  )
}
