import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 387px;
  height: 300px;
  padding: 26px 35px 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};

  h4 {
    font-family: 'General Sans', sans-serif;
    font-weight: 500;
    line-height: 120%;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  /* small {
    font-family: 'General Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.27px;
    color: ${({ theme }) => theme.colors.body_text};
  } */
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 11px;
  background: ${({ theme }) => theme.colors.sky_blue};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 11px;

  background: none;
  border: none;

  font-family: 'General Sans', sans-serif;
  font-weight: 500;
  line-height: 155%;
  letter-spacing: 0.24px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.dark_blue};
  cursor: pointer;
`
