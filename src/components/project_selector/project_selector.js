import React from 'react';
import {Card, Button, Col, Badge, ListGroup} from 'react-bootstrap';

class ProjectSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('Clicked!');
        window.open(this.props.url);
    }

    getProjectURL(projectUrl)
    {
        if (typeof projectUrl === 'undefined' || projectUrl === ''
            || (typeof this.props.videoUrl !== 'undefined' && this.props.videoUrl !== '')) {
            return '';
        }
        return (
            <Button onClick={this.handleClick} variant="primary">More Information</Button>
        );
    }

    getProjectImageOrVideo(){
        if (typeof this.props.videoUrl === 'undefined' || this.props.videoUrl === '') {
            return <Card.Img className="project-image" variant="top" src={this.props.imageUrl}/>;
        } else {
            return (
                <iframe className="project-video" src={this.props.videoUrl} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            )
        }
    }
    getBadges(itemString, badgeType){
        if(typeof itemString === 'undefined'){
            return;
        }
        try {
            let developmentTools = itemString.split(', ');
            return developmentTools.map((tool) => {
                    return (
                        <Badge pill variant={badgeType} key={tool} className="card-row">
                            {tool}
                        </Badge>
                    );
                }
            )
        } catch (e) {
        }
    }
    getDevelopmentInfoRow(developmentType, itemString, badgeType){
        if(typeof itemString === 'undefined' || itemString === ''){
            return '';
        }
        return (
            <ListGroup.Item>
                <div className="row">
                    <div className="col-5">
                        {developmentType}:
                    </div>
                    <div className="col-7">
                        {this.getBadges(itemString, badgeType)}
                    </div>
                </div>
            </ListGroup.Item>
        );
    }


    render()
    {
        return (
            <Col className="project">
                <Card>
                    {this.getProjectImageOrVideo()}
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        {this.getProjectURL(this.props.url)}
                    </Card.Body>
                    <ListGroup>
                        {this.getDevelopmentInfoRow('Project Tags', this.props.tags, 'primary')}
                    </ListGroup>
                </Card>
            </Col>);
    }
}

export default ProjectSelector;
