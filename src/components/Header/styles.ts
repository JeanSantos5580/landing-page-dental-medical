import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.light_blue};
  padding: 28px 42px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`
export const Logo = styled.img`
  width: 133px;
  height: 40px;
  margin-right: 280px;
  margin-right: 280px;
`
export const Buttons = styled.div`
  display: flex;
  gap: 38px;
  margin-right: 174px;
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
`
