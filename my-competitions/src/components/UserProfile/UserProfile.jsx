import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext.jsx';
import Card from "react-bootstrap/Card";

const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <Card>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
                <Card.Text>{user.fullName}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserProfile;