import styled from 'styled-components'
import { Button } from '../Button'

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
export const ViewAllButton = styled(Button)`
  margin-left: 24px;
  @media screen and (min-width: 400px) and (max-width: 880px) {
    display: none;
  }

  @media screen and (min-width: 880px) and (max-width: 1080px) {
  }
`
