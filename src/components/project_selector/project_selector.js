import React from "react";
import { Card, Button } from "react-bootstrap";
const projectName = "";

class ProjectSelector extends React.Component {
    render()
    {
        return(<div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">More Information</Button>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default ProjectSelector;
