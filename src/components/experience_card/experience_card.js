import React from 'react';
import Card from 'react-bootstrap/Card';
import {Badge, Button, Tab, Tabs} from 'react-bootstrap';
import moment from 'moment';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

class ExperienceCard extends React.Component
{
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
                    <Tab eventKey="description" title="Description" className="card-text">
                        {this.props.experience}
                    </Tab>
                    <Tab eventKey="development" title="Development Info" className="card-text">
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col-3">
                                        Programming Languages Used:
                                    </div>
                                    <div className="col-9">
                                        {this.getBadges(this.props.programmingLanguagesUsed, 'primary')}
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col-3">
                                        Frameworks Used:
                                    </div>
                                    <div className="col-9">
                                        {this.getBadges(this.props.frameworksUsed, 'info')}
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col-3">
                                        Development Tools Used:
                                    </div>
                                    <div className="col-9">
                                        {this.getBadges(this.props.developmentToolsUsed, 'secondary')}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="company" title="Company Info" className="card-text">
                        <ListGroup>
                            <ListGroup.Item>
                                {this.props.companyDescription}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card.Link href={this.props.companyURL}>{this.props.companyName} Website</Card.Link>
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
