import { Star } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CommentCardContainer = styled.div`
  width: 413px;
  padding: 30px;
  gap: 15px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8.333px 41.667px 0px rgba(0, 0, 0, 0.08);

  small {
    font-family: 'General Sans', sans-serif;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: 0.27px;
    color: ${({ theme }) => theme.colors.body_text};
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: 'General Sans', sans-serif;
    font-weight: 500;
    line-height: 155%;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.dark_blue};
  }
`
export const Review = styled.div`
  display: flex;
  gap: 2px;
`

export const IconStar = styled(Star).attrs(({ theme }) => ({
  color: theme.colors.warning,
  weight: 'fill',
  size: 20,
}))``
