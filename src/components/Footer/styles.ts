import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

export const Icon = styled.div`
  width: 113px;

  img {
    width: 100%;
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 40px;

  button {
    border: none;
    background: none;

    font-family: 'General Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 155%;
    letter-spacing: 0.24px;

    color: ${({ theme }) => theme.colors.dark_blue};

    cursor: pointer;
  }
`
export const Divider = styled.hr``

export const Rights = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 37px 0;
`
export const SocialMedias = styled.div`
  display: flex;
  gap: 20px;
`
export const SocialMediaButton = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 50%;
  gap: 20px;
  background: ${({ theme }) => theme.colors.dark_blue};
  cursor: pointer;
`
