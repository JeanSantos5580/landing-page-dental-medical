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
