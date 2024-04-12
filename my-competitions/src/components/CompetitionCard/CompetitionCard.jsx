import Card from 'react-bootstrap/Card';

function CompetitionCard({ title, image }) {
    return (
        <Card style={{ width: '9.5rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CompetitionCard;