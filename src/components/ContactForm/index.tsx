import { ContactFormContainer, Form, ImageContact, Input, Main } from './styles'
import image from '../../assets/imageContact01.png'
import { Phone } from '@phosphor-icons/react'
import { MainTitle } from '../MainTitle'

export function ContactForm() {
  return (
    <ContactFormContainer>
      <Main>
        <MainTitle
          title="We’re welcoming new patients and can’t wait to meet you."
          description="We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself."
        />
        <Form>
          <Input>
            <Phone size={20} weight="light" />
            <input type="text" placeholder="Enter your phone number" />
          </Input>
          <button>Submit</button>
        </Form>
      </Main>
      <ImageContact>
        <img src={image} alt="" />
      </ImageContact>
    </ContactFormContainer>
  )
}
