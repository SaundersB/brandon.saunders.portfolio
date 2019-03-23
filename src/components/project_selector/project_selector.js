import React from "react";
import { Card, Button } from "react-bootstrap";

class ProjectSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("Clicked!");
        window.open(this.props.url);
    }
    render()
    {
        return(<div>
            <Card style={{ width: '35rem' }}>
                <Card.Img class="project-image" variant="top" src={this.props.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button onClick={this.handleClick} variant="primary">More Information</Button>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default ProjectSelector;
