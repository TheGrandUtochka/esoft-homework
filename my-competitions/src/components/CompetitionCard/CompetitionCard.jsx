import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CompetitionCard({ title, image }) {
    return (
        <Col>
            <Card style={{ width: '9.5rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default CompetitionCard;