import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'
import {
  Avatar,
  ButtonBookNow,
  Buttons,
  HeaderContainer,
  Logo,
  MenuButton,
} from './styles'

import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'

export function Header() {
  const [sidebar, setSideBar] = useState(false)

  const handleShowSideBar = () => setSideBar(!sidebar)

  return (
    <HeaderContainer>
      <FaBars onClick={handleShowSideBar} />
      {sidebar && <Sidebar active={setSideBar} />}
      <Logo src={logo} />
      <Buttons>
        <MenuButton>Home</MenuButton>
        <MenuButton>Services</MenuButton>
        <MenuButton>Blogs</MenuButton>
        <MenuButton>About</MenuButton>
        <MenuButton>Contact</MenuButton>
      </Buttons>
      <Avatar>
        <img src={avatar} alt="" />
      </Avatar>
      <ButtonBookNow title="Book Now" />
    </HeaderContainer>
  )
}
