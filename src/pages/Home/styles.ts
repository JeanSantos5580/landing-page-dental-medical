import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 80px;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    padding: 40px;
  }

  @media screen and (min-width: 880px) and (max-width: 1080px) {
    padding: 25px;
  }
`
export const Services = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.light_blue};
  padding: 50px 35px;
  gap: 24px;
  margin-top: 74px;
  border-radius: 10px;
`
