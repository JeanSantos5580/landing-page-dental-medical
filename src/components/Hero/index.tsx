import { PhoneCall } from '@phosphor-icons/react'
import { Button } from '../Button'
import * as S from '../Hero/styles'
import avatar from '../../assets/avatar02.png'
import medic from '../../assets/medic.png'
import externalEllipse from '../../assets/external-ellipse.png'
import internalEllipse from '../../assets/internal-ellipse.png'
import teeth from '../../assets/teeth.png'

export function Hero() {
  return (
    <S.HeroContainer>
      <S.Main>
        <h1>Get ready for your best ever Dental Experience!</h1>
        <span>
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </span>
        <S.Contact>
          <Button title="Book an appointment" />
          <S.PhoneNumber>
            <S.Icon>
              <PhoneCall size={24} weight="fill" color="#1376f8" />
            </S.Icon>
            <S.Phone>
              <small>Dental 24H Emergency</small>
              <small>0900-78601</small>
            </S.Phone>
          </S.PhoneNumber>
        </S.Contact>
        <S.DoctorCard>
          <S.BasicInfo>
            <S.Avatar>
              <img src={avatar} alt="" />
            </S.Avatar>
            <S.Name>
              <small>Thomas daniel</small>
              <small>Sr Dental</small>
            </S.Name>
            <S.IconLinkedIn />
          </S.BasicInfo>
          <span>
            Top Quailty dental treatment done by field experts, Highly
            Recommended for everyone
          </span>
        </S.DoctorCard>
      </S.Main>
      <S.HeroImage>
        <S.Image src={medic} alt="" />
        <S.ExternalEllipse src={externalEllipse} alt="" />
        <S.InternalEllipse src={internalEllipse} alt="" />
        <S.Teeth src={teeth} />
      </S.HeroImage>
    </S.HeroContainer>
  )
}
