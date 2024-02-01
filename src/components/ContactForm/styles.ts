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

  h2 {
    font-family: 'General Sans', sans-serif;
    font-size: 42px;
    font-weight: 600;
    line-height: 125%;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  small {
    font-family: 'General Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.27px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.body_text};
  }
`
export const Form = styled.div``

export const ImageContact = styled.div`
  position: relative;
  width: 413px;
  border-radius: 10px;
  img {
    width: 100%;
  }
  margin-right: 30px;
`
export const ImageDuplicateBackground = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 413px;
  height: 362px;
  border-radius: 10px;
  background: linear-gradient(
    53deg,
    rgba(37, 180, 248, 0) 0%,
    rgba(37, 180, 248, 0.47) 64.42%,
    #25b4f8 126.21%
  );
  z-index: -1;
`
