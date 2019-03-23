import React from 'react';
import Card from 'react-bootstrap/Card';
import {Badge, Tab, Tabs} from 'react-bootstrap';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';

class ExperienceCard extends React.Component
{
    getDevelopmentInfoRow(developmentType, itemString, badgeType){
        if(typeof itemString === 'undefined' || itemString === ''){
            return '';
        }
        return (
            <ListGroup.Item>
                <div className="row">
                    <div className="col-3">
                        {developmentType} Used:
                    </div>
                    <div className="col-9">
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
                return (
                    <Badge pill variant={badgeType} key={tool} className="card-row">
                        {tool}
                    </Badge>
                );
            }
        )
    }
    getCompanyTenure(){
        let startDate = moment(this.props.startDate, 'MM-YYYY');
        if(this.props.endDate === 'Current'){
            return moment(this.props.startDate, 'MM-YYYY').fromNow(true).toLocaleString();
        } else {
            let endDate = moment(this.props.endDate, 'MM-YYYY');
            return moment(startDate).from(endDate, true).toLocaleString();
        }
    }
    render()
    {
        return (
            <Card style={{ width: '35rem' }}>
                <Card.Header>{this.props.companyName}
                </Card.Header>
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                    <Tab eventKey="description" title="Description" className="card-text left-align-text">
                        {ExperienceCard.getBulletPoints(this.props.experience)}
                    </Tab>
                    <Tab eventKey="development" title="Development Info" className="card-text">
                        <ListGroup>
                            {this.getDevelopmentInfoRow('Programming Languages ', this.props.programmingLanguagesUsed, 'primary')}
                            {this.getDevelopmentInfoRow('Scripting Languages ', this.props.scriptingLanguagesUsed, 'info')}
                            {this.getDevelopmentInfoRow('Markup Languages ', this.props.markupLanguagesUsed, 'dark')}
                            {this.getDevelopmentInfoRow('Stylesheet Languages  ', this.props.stylesheetLanguagesUsed, 'secondary')}
                            {this.getDevelopmentInfoRow('Frameworks Languages ', this.props.frameworksUsed, 'info')}
                            {this.getDevelopmentInfoRow('Development Tools ', this.props.developmentToolsUsed, 'secondary')}
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="company" title="Company Info" className="card-text">
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="row left-align-text">
                                    {this.props.companyDescription}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card.Link href={this.props.companyURL}>
                                    {this.props.companyName} Website
                                </Card.Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Tab>
                </Tabs>
                <Card.Footer className="text-muted">Tenure: { this.getCompanyTenure() }</Card.Footer>
            </Card>
        );
    }
}

export default ExperienceCard;
