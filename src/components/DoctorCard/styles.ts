import { IoLogoLinkedin } from 'react-icons/io'
import styled from 'styled-components'

export const DoctorCardContainer = styled.div`
  display: flex;
  width: 305px;
  height: 340px;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
  }
`

export const IconLinkedIn = styled(IoLogoLinkedin).attrs(({ theme }) => ({
  color: theme.colors.black,
  size: 40,
}))`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const Assignment = styled.div`
  width: 228px;
  position: absolute;
  bottom: 65px;
  left: 16px;
  display: flex;
  flex-direction: column;

  gap: 4px;
  padding: 12px 25px 20px;

  border: 1px solid red;
  border-radius: 10px;

  h4,
  small {
    color: ${({ theme }) => theme.colors.white};
  }
`
