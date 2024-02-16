// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from 'styled-components'

export const DoctorCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 305px;
  height: 400px;
  flex-direction: column;

  img {
    width: 100%;
  }
`

/* export const IconLinkedIn = styled(IoLogoLinkedin).attrs(({ theme }) => ({
  color: theme.colors.black,
  size: 40,
}))`
  margin-top: -200px;
  margin-left: -50px;
  cursor: pointer;
`

export const Assignment = styled.div`
  max-width: 228px;
  display: flex;
  flex-direction: column;
  margin: 45px 12px 12px 12px;

  gap: 4px;
  padding: 12px 25px 20px;
  border-radius: 10px;

  background: -webkit-linear-gradient(
    45deg,
    hsla(200, 95%, 74%, 1) 0%,
    hsla(200, 92%, 95%, 1) 89%
  );

  h4,
  small {
    color: ${({ theme }) => theme.colors.white};
  }
`
 */
