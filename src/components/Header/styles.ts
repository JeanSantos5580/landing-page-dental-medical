import styled from 'styled-components'
import { Button } from '../Button'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.light_blue};
  padding: 28px 42px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;

  > svg {
    display: none;
    position: sticky;
    right: 0px;
    color: ${({ theme }) => theme.colors.dark_blue};
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media screen and (min-width: 400px) and (max-width: 880px) {
      display: flex;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 880px) {
    border-radius: 0;
  }
`
export const Logo = styled.img`
  width: 133px;
  height: 40px;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    width: 80px;
    height: 25px;
    margin-right: auto;
  }
`
export const Buttons = styled.div`
  display: flex;
  gap: 38px;
  margin-right: 34px;
  margin-left: 34px;

  @media screen and (min-width: 400px) and (max-width: 880px) {
    display: none;
  }

  @media screen and (min-width: 880px) {
  }
`

export const MenuButton = styled.button`
  border: none;
  background: transparent;

  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 155%;
  letter-spacing: 0.24px;

  color: ${({ theme }) => theme.colors.dark_blue};

  cursor: pointer;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 20px;

  img {
    width: 100%;
  }

  @media screen and (min-width: 400px) and (max-width: 880px) {
    display: none;
  }
`

export const ButtonBookNow = styled(Button)`
  @media screen and (min-width: 400px) and (max-width: 880px) {
    display: none;
  }
`
