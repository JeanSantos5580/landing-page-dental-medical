import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px 62px;
  background: ${({ theme }) => theme.colors.dark_blue};
  border-radius: 10px;

  @media screen and (max-width: 880px) {
    padding: 24px 40px;
    flex-direction: column;
  }
`
export const BannerMain = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    width: 100%;
  }

  @media screen and (min-width: 880px) {
    width: 100%;
  }
`

export const ContainerButton = styled.div`
  width: 45%;
  @media screen and (min-width: 400px) and (max-width: 880px) {
    margin-bottom: 50px;
  }
`
export const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 215px;
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (min-width: 400px) and (max-width: 880px) {
    width: 100%;
  }

  @media screen and (min-width: 880px) {
    margin: 0 30px;
  }
`
