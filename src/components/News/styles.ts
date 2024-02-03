import styled from 'styled-components'

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
