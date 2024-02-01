import { GoShieldCheck } from 'react-icons/go'
import styled from 'styled-components'

export const BannerAdvantagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 55px 108px;
  margin-top: 120px;
  gap: 128px;
  background: ${({ theme }) => theme.colors.light_blue};
`

export const BannerImage = styled.div`
  width: 414px;
  height: 444px;

  img {
    width: 100%;
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
