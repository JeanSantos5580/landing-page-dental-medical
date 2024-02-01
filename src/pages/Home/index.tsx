import { Tooth } from '@phosphor-icons/react'
import { Hero } from '../../components/Hero'
import { ServiceCard } from '../../components/ServiceCard'
import { Services } from './styles'
import { LipsIcon } from '../../icons/lips'
import { ImplantIcon } from '../../icons/implant'
import { ContactForm } from '../../components/ContactForm'
import { BannerBestProducts } from '../../components/BannerBestProducts'
import { BannerAdvantages } from '../../components/BannerAdvantages'
import { VideoDemonstration } from '../../components/VideoDemonstration'

export function Home() {
  return (
    <div>
      <Hero />
      <Services>
        <ServiceCard
          icon={<Tooth size={42} weight="light" />}
          title="Root Canal Treatment"
          description="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth."
        />
        <ServiceCard
          icon={<LipsIcon size={42} />}
          title="Cosmetic Dentist"
          description="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile."
        />
        <ServiceCard
          icon={<ImplantIcon size={42} />}
          title="Dental Implants"
          description="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge."
        />
      </Services>
      <ContactForm />
      <BannerAdvantages />
      <BannerBestProducts />
      <VideoDemonstration />
    </div>
  )
}
