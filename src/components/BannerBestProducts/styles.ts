import styled from 'styled-components'

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 121px;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    flex-direction: column;
  }

  @media screen and (min-width: 880px) and (max-width: 1080px) {
  }
`
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    width: 100%;
  }

  @media screen and (min-width: 880px) {
    width: 50%;
  }
`

export const ContainerButton = styled.div`
  width: 45%;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    margin-bottom: 50px;
  }
`
export const BannerImage = styled.div`
  max-width: 415px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
  margin-left: 30px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (min-width: 400px) and (max-width: 880px) {
    margin: 0 auto;
  }
`
