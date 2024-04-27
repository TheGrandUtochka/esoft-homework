import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CompetitionCard from './components/CompetitionCard/CompetitionCard';
import MyCompetitions from "./components/MyCompetitions/MyCompetitions.jsx";
import MyFutureCompetitions from "./components/MyFutureCompetitions/MyFutureCompetitions.jsx";
import {UserContext, UserProvider} from "./components/UserContext/UserContext.jsx";
import {CompetitionsProvider} from "./components/CompetitionsContext/CompetitionsContext.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import CompetitionBtn from "./components/CompetitionBtn/CompetitionBtn.jsx";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserProvider>
            <UserProfile/>
          </UserProvider>
        </Col>
        <Col>
          <CompetitionBtn />
        </Col>
      </Row>
    </Container>
  );
}

export default App
