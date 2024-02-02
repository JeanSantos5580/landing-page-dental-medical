import styled from 'styled-components'

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`
export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
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
  background: ${({ theme }) => theme.colors.dark_blue};
  border-radius: 4px;
  cursor: pointer;

  border: none;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
