import styled from 'styled-components'

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 121px;
`
export const Main = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`

export const ContainerButton = styled.div`
  width: 45%;
`
export const BannerImage = styled.div`
  position: relative;
  width: 413px;
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  margin-right: 30px;
`
export const ImageDuplicateBackground = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 410px;
  height: 330px;
  border-radius: 10px;
  background: linear-gradient(
    53deg,
    rgba(37, 180, 248, 0) 0%,
    rgba(37, 180, 248, 0.47) 64.42%,
    #25b4f8 126.21%
  );
  z-index: -1;
`
