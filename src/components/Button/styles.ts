import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 15px 30px;

  background: ${({ theme }) => theme.colors.mid_blue};
  color: ${({ theme }) => theme.colors.white};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;

  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 155%;
  white-space: nowrap;

  cursor: pointer;
`
