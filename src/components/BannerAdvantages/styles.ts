import { GoShieldCheck } from 'react-icons/go'
import styled from 'styled-components'

export const BannerAdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 55px 108px;
  margin-top: 120px;
  gap: 128px;
  background: ${({ theme }) => theme.colors.light_blue};

  @media screen and (min-width: 400px) and (max-width: 1080px) {
    flex-direction: column-reverse;
    padding: 80px 20px;
    gap: 52px;
  }
`

export const BannerImage = styled.div`
  width: 100%;
  max-width: 414px;
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const Advantage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  small {
    font-family: 'General Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 155%;
    letter-spacing: 0.27px;
    color: ${({ theme }) => theme.colors.body_text};
  }
`

export const IconShield = styled(GoShieldCheck).attrs(({ theme }) => ({
  color: theme.colors.mid_blue,
  size: 18,
}))``

export const ContainerButton = styled.div`
  width: 45%;
  margin-top: 30px;
`
