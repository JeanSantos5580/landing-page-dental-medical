import { Button } from '../Button'
import { MainTitle } from '../MainTitle'
import { NewsCard } from './Card'
import { ContainerButton, Header, NewsContainer, ViewAllButton } from './styles'
import news01 from '../../assets/news01.png'
import { Carousel } from '../Carousel'

export function News() {
  const newsCards = [
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
    {
      path: news01,
      tag: 'Self care',
      title: 'Care of your Teeth',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      author: '~Anita Jackson',
    },
  ]

  return (
    <NewsContainer>
      <Header>
        <MainTitle
          title="News & Articles"
          description="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        <ViewAllButton title="View All" />
      </Header>
      <Carousel>
        {newsCards.map((news, key) => (
          <NewsCard
            key={key}
            path={news.path}
            tag={news.tag}
            title={news.title}
            description={news.description}
            author={news.author}
          />
        ))}
      </Carousel>

      <ContainerButton>
        <Button title="Check out more" />
      </ContainerButton>
    </NewsContainer>
  )
}
