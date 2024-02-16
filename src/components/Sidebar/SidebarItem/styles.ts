import styled from 'styled-components'

export const ContainerSidebarItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 0 15px 20px;
  cursor: pointer;

  > svg {
    margin: 0 20px;
    color: white;
  }

  &:hover {
    filter: opacity(0.4);
  }
`
