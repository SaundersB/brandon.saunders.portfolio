import React from 'react';
import {Card, Button, Col, Badge, ListGroup} from 'react-bootstrap';
import Modal from 'react-modal';
import {ORGANIZATION_KEY_NAME, PROJECT_TAGS_NAME, PROJECT_URL_NAME} from '../../helpers/constants';
import RelationshipBuilder from '../../helpers/relationship_builder';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ProjectSelector extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showModal: false,
            modalData: 'Hello'
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleExternalClick = this.handleExternalClick.bind(this);
        this.relationshipBuilder = new RelationshipBuilder();
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    handleClick(tag){
        console.log(this.relationshipBuilder.getAssociatedOrganizationsByTag(tag));
        this.setState({
            showModal: true
        });
    }
    openModal() {
        this.setState({showModal: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({showModal: false});
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
                <iframe title={this.props.name} className="project-video" src={this.props.videoUrl} frameBorder="0"
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
                            <div key={tool}  onClick={this.handleClick.bind(this, tool)}>
                                <Badge pill variant={badgeType} key={tool} className="card-row">
                                    {tool}
                                </Badge>
                            </div>
                        );
                    }
                )
            } else {
                return developmentTools.map((tool) => {
                        return (
                            <Badge onClick={this.toggleModal} variant={badgeType} key={tool} className="card-row">
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
                    <button onClick={this.toggleModal}>
                        Open the modal
                    </button>
                    <Modal
                        isOpen={this.state.showModal}
                        style={customStyles}>
                        <h2 ref={subtitle => this.subtitle = subtitle}>{ this.props.modalData }</h2>
                        <div>{ this.props.modalData }</div>
                        <button onClick={this.closeModal}>close</button>
                    </Modal>
                </Card>
            </Col>);
    }
}

export default ProjectSelector;
