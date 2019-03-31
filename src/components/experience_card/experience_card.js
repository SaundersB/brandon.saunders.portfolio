import React from 'react';
import Card from 'react-bootstrap/Card';
import {Badge, Col, Row, Tab, Tabs} from 'react-bootstrap';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import TagRelationships from '../tag_relationships/tag_relationships';
import Modal from 'react-modal';

import {
    COMPANY_DESCRIPTION_NAME,
    COMPANY_NAME,
    COMPANY_URL_NAME,
    DEVELOPMENT_TOOLS_USED_NAME, END_DATE_NAME,
    EXPERIENCE_NAME,
    FRAMEWORKS_USED_NAME,
    MARKUP_LANGUAGES_USED_NAME, PROGRAMMING_LANGUAGES_USED_NAME,
    SCRIPTING_LANGUAGES_USED_NAME, START_DATE_NAME,
    STYLESHEET_LANGUAGES_USED_NAME,
} from '../../helpers/constants';
import {getKey} from '../../helpers/string_helpers';
import RelationshipBuilder from '../../helpers/relationship_builder';
import * as ReactDOM from 'react-dom';

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

class ExperienceCard extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalData: ''
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleExternalClick = this.handleExternalClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.relationshipBuilder = new RelationshipBuilder();
    }
    componentDidMount() {
        Modal.setAppElement('body');
    }

    handleClickOutside(e) {
        try {
            if(this.node) {
                const domNode = ReactDOM.findDOMNode(this.node);
                if(domNode === e.target) {
                    this.closeModal();
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
    handleClick(tag){
        let projectsData = this.relationshipBuilder.getAssociatedProjectsByTag(tag);
        projectsData['relationshipType'] = 'Projects';

        if(projectsData.projects.length <= 0){
            console.log("No project data");
            return;
        }
        if (!this.state.showModal) {
            document.addEventListener('click', this.handleClickOutside, false);
        } else {
            document.removeEventListener('click', this.handleClickOutside, false);
        }
        this.setState({
            showModal: true,
            modalData: projectsData,
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


    getEnhancedPopup(){
        return (<Modal
            ref={node => { this.node = node; }}
            isOpen={this.state.showModal}
            style={customStyles}
            disableOnClickOutside={false}>
            <TagRelationships {...this.state.modalData}/>
        </Modal>);
    }


    getDevelopmentInfoRow(developmentType, itemString, badgeType){
        if(typeof itemString === 'undefined' || itemString === ''){
            return '';
        }
        return (
            <ListGroup.Item >
                <div className="row">
                    <div className="col-5">
                        {developmentType} Used:
                    </div>
                    <div className="col-7">
                        {this.getBadges(itemString, badgeType)}
                    </div>
                </div>
            </ListGroup.Item>
        );
    }
    static getBulletPoints(descriptionString){
        let bulletItems = descriptionString.split('* ');
        let listItems = bulletItems.map((item) => {
                return (
                    <li key={item} className="card-row">
                        {item}
                    </li>
                );
            }
        );
        return <ul>{listItems}</ul>;
    }
    getBadges(itemString, badgeType){
        if(typeof itemString === 'undefined'){
            return;
        }
        let developmentTools = itemString.split(', ');
        return developmentTools.map((tool) => {
                let projects = this.relationshipBuilder.getAssociatedProjectsByTag(tool);
                let clickable = '';
                if(projects.projects.length > 0){
                    clickable = 'mouse-pointer'
                }
                return (
                    <div key={tool}  onClick={this.handleClick.bind(this, tool)}>
                        <Badge pill variant={badgeType} key={tool} className={"card-row " + clickable}>
                        {tool}
                    </Badge>
                    </div>
                );
            }
        )
    }
    getCompanyTenure(){
        let startDate = moment(this.props[START_DATE_NAME], 'MM-YYYY');
        if(this.props[END_DATE_NAME] === 'Current'){
            return "Currently employed for " + moment(this.props[START_DATE_NAME], 'MM-YYYY').fromNow(true).toLocaleString();
        } else {
            let endDate = moment(this.props[END_DATE_NAME], 'MM-YYYY');
            return moment(startDate).from(endDate, true).toLocaleString();
        }
    }
    render()
    {
        return (
            <Card id={getKey(this.props[COMPANY_NAME])}
                  ref={getKey(this.props[COMPANY_NAME])}
                  name={getKey(this.props[COMPANY_NAME])}>
                <Card.Header>
                    {this.props[COMPANY_NAME]}
                </Card.Header>
                <Row xs={12} md={12}>
                    <Col>
                        <Tabs defaultActiveKey="description" id="uncontrolled-tab" className="justify-content-center">
                            <Tab eventKey="description" title="Description" className="left-align-text custom-tabs">
                                <div className="card-text">
                                    {ExperienceCard.getBulletPoints(this.props[EXPERIENCE_NAME])}
                                </div>
                            </Tab>
                            <Tab eventKey="development" title="Development Info" className="card-text custom-tabs">
                                <ListGroup>
                                    {this.getDevelopmentInfoRow('Programming Languages ', this.props[PROGRAMMING_LANGUAGES_USED_NAME], 'primary')}
                                    {this.getDevelopmentInfoRow('Scripting Languages ', this.props[SCRIPTING_LANGUAGES_USED_NAME], 'info')}
                                    {this.getDevelopmentInfoRow('Markup Languages ', this.props[MARKUP_LANGUAGES_USED_NAME], 'dark')}
                                    {this.getDevelopmentInfoRow('Stylesheet Languages  ', this.props[STYLESHEET_LANGUAGES_USED_NAME], 'secondary')}
                                    {this.getDevelopmentInfoRow('Frameworks Languages ', this.props[FRAMEWORKS_USED_NAME], 'info')}
                                    {this.getDevelopmentInfoRow('Development Tools ', this.props[DEVELOPMENT_TOOLS_USED_NAME], 'secondary')}
                                </ListGroup>
                            </Tab>
                            <Tab eventKey="company" title="Company Info" className="card-text custom-tabs">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div className="row left-align-text card-row">
                                            {this.props[COMPANY_DESCRIPTION_NAME]}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Card.Link href={this.props[COMPANY_URL_NAME]} >
                                            {this.props[COMPANY_NAME]} Website
                                        </Card.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Tab>
                            <div className="card-row"/>
                        </Tabs>
                    </Col>
                </Row>
                <Card.Footer className="text-muted">Tenure: { this.getCompanyTenure() }</Card.Footer>
                { this.getEnhancedPopup() }
            </Card>
        );
    }
}

export default ExperienceCard;
