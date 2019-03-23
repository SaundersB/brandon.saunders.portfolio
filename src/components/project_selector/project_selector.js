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
    getProjectURL(projectUrl){
        if(typeof projectUrl === 'undefined' || projectUrl === ''){
            return '';
        }
        return (
            <Button onClick={this.handleClick} variant="primary">More Information</Button>
        );
    }
    render()
    {
        return(<div>
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    { this.getProjectURL(this.props.url) }
                </Card.Body>
            </Card>
        </div>);
    }
}

export default ProjectSelector;
