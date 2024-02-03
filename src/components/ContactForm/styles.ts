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
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    width: 100%;
  }

  @media screen and (min-width: 880px) and (max-width: 1080px) {
  }
`
export const Form = styled.div`
  display: flex;

  button {
    padding: 15px 30px;

    background: ${({ theme }) => theme.colors.mid_blue};
    color: ${({ theme }) => theme.colors.white};

    border: none;
    border-radius: 0 10px 10px 0;

    font-family: 'General Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 155%;
    white-space: nowrap;

    cursor: pointer;
  }
`
export const Input = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  padding: 16px 22px;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 10px 0 0 10px;

  input {
    flex: 1;
    border: none;
    color: ${({ theme }) => theme.colors.gray_200};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.gray_200};
  }
`

export const ImageContact = styled.div`
  width: 100%;
  max-width: 413px;
  border-radius: 10px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 400px) and (max-width: 880px) {
    margin-top: 50px;
    align-self: center;
  }

  @media screen and (min-width: 880px) and (max-width: 1080px) {
  }
`
