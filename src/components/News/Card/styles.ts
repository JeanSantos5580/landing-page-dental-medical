import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.light_blue};
  border-radius: 10px;

  img {
    width: 100%;
  }

  small {
    font-family: 'General Sans', sans-serif;
    line-height: 155%;
    letter-spacing: 0.27px;
    font-size: 18px;
  }
`

export const Title = styled.small`
  color: ${({ theme }) => theme.colors.dark_blue};
  font-weight: 700;
  margin-top: 14px;
`
export const Description = styled.small`
  color: ${({ theme }) => theme.colors.body_text};
  font-weight: 400;
  margin-top: 10px;
`
export const Author = styled.small`
  color: ${({ theme }) => theme.colors.dark_blue};
  font-weight: 400;
  align-self: flex-end;
  margin-top: 4px;
`

export const Tag = styled.span`
  width: fit-content;
  padding: 5px 13px;
  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-top: 22px;

  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 155%;
  letter-spacing: 0.27px;
`
