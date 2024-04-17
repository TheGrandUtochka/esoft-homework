import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CompetitionCard({ title, description, image, completed }) {
    return (
        <Col>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>Уровень владения: {completed}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default CompetitionCard;