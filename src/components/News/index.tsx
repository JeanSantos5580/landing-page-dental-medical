import { Button } from '../Button'
import { MainTitle } from '../MainTitle'
import { Card } from './Card'
import { Cards, ContainerButton, Header, NewsContainer } from './styles'
import news01 from '../../assets/news01.png'

export function News() {
  return (
    <NewsContainer>
      <Header>
        <MainTitle
          title="News & Articles"
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        <Button title="View All" />
      </Header>
      <Cards>
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <Card
          path={news01}
          tag="Self care"
          title="Care of your Teeth"
          description="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
      </Cards>
      <ContainerButton>
        <Button title="Check out more" />
      </ContainerButton>
    </NewsContainer>
  )
}
