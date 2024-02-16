import { Tooth } from '@phosphor-icons/react'
import { Hero } from '../../components/Hero'
import { ServiceCard } from '../../components/ServiceCard'
import { HomeContainer } from './styles'
import { LipsIcon } from '../../icons/lips'
import { ImplantIcon } from '../../icons/implant'
import { ContactForm } from '../../components/ContactForm'
import { BannerBestProducts } from '../../components/BannerBestProducts'
import { BannerAdvantages } from '../../components/BannerAdvantages'
import { VideoDemonstration } from '../../components/VideoDemonstration'
import { Specialists } from '../../components/Specialists'
import { Clients } from '../../components/Clients'
import { News } from '../../components/News'
import { Faq } from '../../components/Faq'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'

export function Home() {
  const serviceCards = [
    {
      icon: <Tooth size={42} weight="light" />,
      title: 'Treatment',
      description:
        'Best treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.',
    },
    {
      icon: <LipsIcon size={42} />,
      title: 'Cosmetic Dentist',
      description:
        'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.',
    },
    {
      icon: <ImplantIcon size={42} />,
      title: 'Dental Implants',
      description:
        'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
    },
  ]
  return (
    <HomeContainer>
      <Hero />
      <Carousel background="blue">
        {serviceCards.map((service, key) => (
          <ServiceCard
            key={key}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </Carousel>
      <ContactForm />
      <BannerAdvantages />
      <BannerBestProducts />
      <VideoDemonstration />
      <Specialists />
      <Clients />
      <News />
      <Faq />
      <Banner />
      <Footer />
    </HomeContainer>
  )
}
