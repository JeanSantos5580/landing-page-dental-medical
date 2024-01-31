import { IoLogoLinkedin } from 'react-icons/io'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 60px;
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'General Sans', sans-serif;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -1.24px;
    text-transform: capitalize;
    margin-bottom: 22px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  span {
    font-family: 'General Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.27px;
    margin-bottom: 40px;
  }
`

export const Contact = styled.div`
  display: flex;
  gap: 22px;
`

export const PhoneNumber = styled.div`
  display: flex;
  gap: 15px;
`

export const Icon = styled.div`
  outline: 1px solid ${({ theme }) => theme.colors.mid_blue};
  border: 7px solid ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.light_blue} 0%,
    rgba(230, 246, 254, 0) 100%
  );
`

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  small {
    font-family: 'General Sans', sans-serif;
    font-size: 14px;
    line-height: 155%;
    letter-spacing: 0.28px;
  }

  small:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mid_blue};
  }
  small:last-child {
    font-weight: 500;
  }
`

export const DoctorCard = styled.div`
  width: 374px;
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8.333px 41.667px 0px rgba(0, 0, 0, 0.08);
  margin-top: 50px;

  span {
    font-family: 'General Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.18px;
  }
`

export const BasicInfo = styled.div`
  display: flex;
  margin-bottom: 13px;
  gap: 8px;
`

export const Avatar = styled.div`
  width: 42px;
  height: 42px;

  img {
    width: 100%;
  }
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-family: 'General Sans', sans-serif;
    line-height: 155%;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  small:first-child {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.28px;
  }
  small:last-child {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.18px;
  }
`

export const IconLinkedIn = styled(IoLogoLinkedin).attrs(({ theme }) => ({
  color: theme.colors.mid_blue,
  size: 18,
}))`
  margin-left: auto;
`
export const HeroImage = styled.div`
  width: 50%;
  position: relative;
  left: 0;
`
export const Image = styled.img`
  width: 100%;
  position: absolute;
  left: -60px;
  z-index: 2;
`

export const ExternalEllipse = styled.img`
  width: 590px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`
export const InternalEllipse = styled.img`
  width: 470px;
  position: absolute;
  left: 60px;
  top: 50px;
  z-index: 1;
`
export const Teeth = styled.img`
  width: 620px;
  position: absolute;
  left: -20px;
  top: 0px;
  z-index: 1;
`
