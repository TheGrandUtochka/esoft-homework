import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CompetitionCard from './components/CompetitionCard/CompetitionCard';
import AvatarAndNameCard from './components/AvatarAndNameCard/AvatarAndNameCard';

function App() {
  const myAvatarAndName = [
    {
      fullName: 'Мелоян Гранд Арсенович',
      image: 'https://media.licdn.com/dms/image/C5603AQHR2XFoZJUNow/profile-displayphoto-shrink_400_400/0/1624171171649?e=2147483647&v=beta&t=yxOSz_LrecPG-9K_EApdSB9gDxJACbKp57GkpcQd4HA'
    }
  ]

  const myCompetitions = [
    {
      title: 'Java',
      image: 'https://i.stack.imgur.com/QSUlO.jpg?s=64&g=1'
    },
    {
      title: 'HTML',
      image: 'https://avatars.cloudflare.steamstatic.com/a272ba907dd923818e76b6091de544af7a356fb6_medium.jpg'
    },
    {
      title: 'CSS',
      image: 'https://nxtwave.imgix.net/ccbp-website/Blogs/java-full-stack/css.svg?auto=format,compress&q=80'
    },
    {
      title: 'JavaScript',
      image: 'https://avatars.cloudflare.steamstatic.com/38cb7b7806e9d8296144839e2bad9f58d5cf720b_medium.jpg'
    },
  ]

  const futureCompetitions = [
    {
      title: 'React',
      image: 'https://avatars.steamstatic.com/a7ce1fbad9ba64a4aed188a6f2cab8c6405a2756_medium.jpg'
    },
    {
      title: 'Тестирование',
      image: 'https://icon666.com/r/_thumb/zrp/zrp7u5zqywts_64.png'
    },
    {
      title: 'TypeScript',
      image: 'https://decipher.dev/30-seconds-of-typescript/img/favicon.ico'
    },
    {
      title: 'Restful API',
      image: 'https://i.stack.imgur.com/JstTY.png?s=64&g=1'
    },
    {
      title: 'Микросервисы',
      image: 'https://avatars.githubusercontent.com/u/72651437?s=64&v=4'
    },
    {
      title: 'Docker',
      image: 'https://avatars.githubusercontent.com/u/69834377?s=64&v=4'
    },
    {
      title: 'PostgreSQL',
      image: 'https://s3.amazonaws.com/cloud.ohloh.net/attachments/6297/logo_pgfr_sans_100_med.png'
    },
    {
      title: 'UX/UI',
      image: 'https://assets.graffletopia.com/production/users/33247/1382140872/small.png'
    },
    {
      title: 'Мультизадачность',
      image: 'https://icon666.com/r/_thumb/v8n/v8nao9c2wn0j_64.png'
    },
    {
      title: 'Планирование',
      image: 'https://cdn1.iconfinder.com/data/icons/usability-testing-line/128/Usability_Testing_-_Line_-_Expand-18-64.png'
    },
  ]

  return (
    <Container>
      <Row>
        <Col>
          <AvatarAndNameCard
            fullName={myAvatarAndName[0].fullName}
            image={myAvatarAndName[0].image}
          />
        </Col>
        <Col>
          <Row>
            <h2>
              Мои компетенции:
            </h2>
            <Row>
              <CompetitionCard
                title={myCompetitions[0].title}
                image={myCompetitions[0].image}
              />
              <CompetitionCard
                title={myCompetitions[1].title}
                image={myCompetitions[1].image}
              />
              <CompetitionCard
                title={myCompetitions[2].title}
                image={myCompetitions[2].image}
              />
              <CompetitionCard
                title={myCompetitions[3].title}
                image={myCompetitions[3].image}
              />
            </Row>
            <h2>
              Компетенции, которые я бы хотел изучить:
            </h2>
            <Row>
              <CompetitionCard
                title={futureCompetitions[0].title}
                image={futureCompetitions[0].image}
              />
              <CompetitionCard
                title={futureCompetitions[1].title}
                image={futureCompetitions[1].image}
              />
              <CompetitionCard
                title={futureCompetitions[2].title}
                image={futureCompetitions[2].image}
              />
              <CompetitionCard
                title={futureCompetitions[3].title}
                image={futureCompetitions[3].image}
              />
              <CompetitionCard
                title={futureCompetitions[4].title}
                image={futureCompetitions[4].image}
              />
              <CompetitionCard
                title={futureCompetitions[5].title}
                image={futureCompetitions[5].image}
              />
              <CompetitionCard
                title={futureCompetitions[6].title}
                image={futureCompetitions[6].image}
              />
              <CompetitionCard
                title={futureCompetitions[7].title}
                image={futureCompetitions[7].image}
              />
              <CompetitionCard
                title={futureCompetitions[8].title}
                image={futureCompetitions[8].image}
              />
              <CompetitionCard
                title={futureCompetitions[9].title}
                image={futureCompetitions[9].image}
              />
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App
