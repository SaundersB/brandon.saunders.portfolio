import React from 'react';
import Card from 'react-bootstrap/Card';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class ExperienceCard extends React.Component
{
    render()
    {
        return (
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.companyName}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Subtitle className="mb-2">Start Date: {this.props.startDate}</Card.Subtitle>
                            <Card.Subtitle className="mb-2">End Date: {this.props.endDate}</Card.Subtitle>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Text>
                        {this.props.experience}
                    </Card.Text>
                    <Card.Link href="#">Company Site</Card.Link>
                </Card.Body>
            </Card>);
    }
}

export default ExperienceCard;
