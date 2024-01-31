import { Avatar, Buttons, HeaderContainer, Logo, MenuButton } from './styles'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import { Button } from '../Button'

export function Header() {
  return (
    <HeaderContainer>
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
      <Button title="Book Now" />
    </HeaderContainer>
  )
}
