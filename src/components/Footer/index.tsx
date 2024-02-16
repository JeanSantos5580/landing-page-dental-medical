import {
  Buttons,
  Divider,
  FooterContainer,
  Header,
  Icon,
  Rights,
  SocialMediaButton,
  SocialMedias,
} from './styles'
import logo from '../../assets/logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export function Footer() {
  return (
    <FooterContainer>
      <Header>
        <Icon src={logo} />
        <Buttons>
          <button>Home</button>
          <button>Service</button>
          <button>Blogs</button>
          <button>About</button>
          <button>Contact</button>
        </Buttons>
      </Header>
      <Divider />
      <Rights>
        <small>
          All rights reserved ® uifry.com | Terms and conditions apply!
        </small>
        <SocialMedias>
          <SocialMediaButton>
            <FaFacebook color="#fff" />
          </SocialMediaButton>
          <SocialMediaButton>
            <FaInstagram color="#fff" />
          </SocialMediaButton>
          <SocialMediaButton>
            <FaYoutube color="#fff" />
          </SocialMediaButton>
          <SocialMediaButton>
            <FaLinkedinIn color="#fff" />
          </SocialMediaButton>
          <SocialMediaButton>
            <FaXTwitter color="#fff" />
          </SocialMediaButton>
        </SocialMedias>
      </Rights>
    </FooterContainer>
  )
}
