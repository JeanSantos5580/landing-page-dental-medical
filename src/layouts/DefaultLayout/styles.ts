import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: calc(100vh - 90px);
  margin: auto;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors.white};
`
