import Card from 'react-bootstrap/Card';

function AvatarAndNameCard({ fullName, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>{fullName}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AvatarAndNameCard;