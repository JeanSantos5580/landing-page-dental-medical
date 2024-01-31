import { PhoneCall } from '@phosphor-icons/react'
import { Button } from '../Button'
import {
  Avatar,
  BasicInfo,
  Contact,
  DoctorCard,
  HeroContainer,
  Icon,
  IconLinkedIn,
  HeroImage,
  Main,
  Name,
  Phone,
  PhoneNumber,
  ExternalEllipse,
  InternalEllipse,
  Image,
  Teeth,
} from './styles'
import avatar from '../../assets/avatar02.png'
import medic from '../../assets/medic.png'
import externalEllipse from '../../assets/external-ellipse.png'
import internalEllipse from '../../assets/internal-ellipse.png'
import teeth from '../../assets/teeth.png'

export function Hero() {
  return (
    <HeroContainer>
      <Main>
        <h1>Get ready for your best ever Dental Experience!</h1>
        <span>
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </span>
        <Contact>
          <Button title="Book an appointment" />
          <PhoneNumber>
            <Icon>
              <PhoneCall size={24} weight="fill" color="#1376f8" />
            </Icon>
            <Phone>
              <small>Dental 24H Emergency</small>
              <small>0900-78601</small>
            </Phone>
          </PhoneNumber>
        </Contact>
        <DoctorCard>
          <BasicInfo>
            <Avatar>
              <img src={avatar} alt="" />
            </Avatar>
            <Name>
              <small>Thomas daniel</small>
              <small>Sr Dental</small>
            </Name>
            <IconLinkedIn />
          </BasicInfo>
          <span>
            Top Quailty dental treatment done by field experts, Highly
            Recommended for everyone
          </span>
        </DoctorCard>
      </Main>
      <HeroImage>
        <Image src={medic} alt="" />
        <ExternalEllipse src={externalEllipse} alt="" />
        <InternalEllipse src={internalEllipse} alt="" />
        <Teeth src={teeth} />
      </HeroImage>
    </HeroContainer>
  )
}
