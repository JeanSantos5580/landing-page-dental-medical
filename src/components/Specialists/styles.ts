import styled from 'styled-components'

export const SpecialistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
  margin-top: 120px;
  background: ${({ theme }) => theme.colors.light_blue};

  @media screen and (min-width: 400px) and (max-width: 880px) {
    padding: 24px 32px;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 20px;
`

export const Buttons = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 26px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  cursor: pointer;

  border: none;
`
