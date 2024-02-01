import {
  ContactFormContainer,
  Form,
  ImageContact,
  ImageDuplicateBackground,
  Main,
} from './styles'
import image from '../../assets/imageContact.png'

export function ContactForm() {
  return (
    <ContactFormContainer>
      <Main>
        <h2>We’re welcoming new patients and can’t wait to meet you.</h2>
        <small>
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </small>
        <Form>
          <input type="text" />
          <button>Submit</button>
        </Form>
      </Main>
      <ImageContact>
        <ImageDuplicateBackground />
        <img src={image} alt="" />
      </ImageContact>
    </ContactFormContainer>
  )
}
