import React from 'react';
import {Card, Button, Col, Badge, ListGroup} from 'react-bootstrap';
import PopupModal from '../../components/popup_modal/popup_modal';
import {ORGANIZATION_KEY_NAME, PROJECT_TAGS_NAME, PROJECT_URL_NAME} from '../../helpers/constants';

class ProjectSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleExternalClick = this.handleExternalClick.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }
    handleExternalClick()
    {
        window.open(this.props.url);
    }

    getProjectURL(projectUrl)
    {
        if (typeof projectUrl === 'undefined' || projectUrl === ''
            || (typeof this.props.videoUrl !== 'undefined' && this.props.videoUrl !== '')) {
            return '';
        }
        return (
            <Button onClick={this.handleExternalClick} size="sm" variant="outline-primary">More Information</Button>
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
    getBadges(itemString, badgeType, pillType){
        if(typeof itemString === 'undefined'){
            return;
        }
        try {
            let developmentTools = itemString.split(', ');
            if(pillType) {
                return developmentTools.map((tool) => {
                        return (
                            <Badge pill variant={badgeType} key={tool} className="card-row">
                                {tool}
                            </Badge>
                        );
                    }
                )
            } else {
                return developmentTools.map((tool) => {
                        return (
                            <Badge variant={badgeType} key={tool} className="card-row">
                                    {tool}
                            </Badge>
                        );
                    }
                )
            }
        } catch (e) {
        }
    }
    getBadgeRow(developmentType, itemString, badgeType, pillType=true){
        if(typeof itemString === 'undefined' || itemString === ''){
            return '';
        }
        let badge = this.getBadges(itemString, badgeType, pillType);
        return ProjectSelector.getListGroupItem(developmentType, badge);
    }

    static getListGroupItem(header, value){
        return (<ListGroup.Item>
            <div className="row">
                <div className="col-5">
                    {header}:
                </div>
                <div className="col-7">
                    {value}
                </div>
            </div>
        </ListGroup.Item>);
    }


    render()
    {
        return (
            <Col className="project">
                <Card>
                    {this.getProjectImageOrVideo()}
                    <Card.Body>
                        <Card.Title>{this.props[PROJECT_TAGS_NAME]}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        {this.getBadgeRow('Organization', this.props[ORGANIZATION_KEY_NAME], 'secondary', false)}
                        {this.getBadgeRow('Project Tags', this.props[PROJECT_TAGS_NAME], 'primary')}
                        { ProjectSelector.getListGroupItem('External Link', this.getProjectURL(this.props[PROJECT_URL_NAME])) }
                    </ListGroup>
                    <PopupModal
                        isOpen={this.state.showModal}/>
                </Card>
            </Col>);
    }
}

export default ProjectSelector;
