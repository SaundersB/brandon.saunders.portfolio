import React from 'react';
import Card from 'react-bootstrap/Card';
import {Badge, Tab, Tabs} from 'react-bootstrap';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
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
import {getOrganizationKey} from '../../helpers/string_helpers';

class ExperienceCard extends React.Component
{
    getDevelopmentInfoRow(developmentType, itemString, badgeType){
        if(typeof itemString === 'undefined' || itemString === ''){
            return '';
        }
        return (
            <ListGroup.Item>
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
                return (
                    <Badge pill variant={badgeType} key={tool} className="card-row">
                        {tool}
                    </Badge>
                );
            }
        )
    }
    getCompanyTenure(){
        let startDate = moment(this.props[START_DATE_NAME], 'MM-YYYY');
        if(this.props[END_DATE_NAME] === 'Current'){
            return moment(this.props[START_DATE_NAME], 'MM-YYYY').fromNow(true).toLocaleString();
        } else {
            let endDate = moment(this.props[END_DATE_NAME], 'MM-YYYY');
            return moment(startDate).from(endDate, true).toLocaleString();
        }
    }
    render()
    {
        return (
            <Card id={getOrganizationKey(this.props[COMPANY_NAME])}
                  ref={getOrganizationKey(this.props[COMPANY_NAME])}
                  name={getOrganizationKey(this.props[COMPANY_NAME])}>
                <Card.Header>
                    {this.props[COMPANY_NAME]}
                </Card.Header>
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                    <Tab eventKey="description" title="Description" className="card-text left-align-text">
                        {ExperienceCard.getBulletPoints(this.props[EXPERIENCE_NAME])}
                    </Tab>
                    <Tab eventKey="development" title="Development Info" className="card-text">
                        <ListGroup>
                            {this.getDevelopmentInfoRow('Programming Languages ', this.props[PROGRAMMING_LANGUAGES_USED_NAME], 'primary')}
                            {this.getDevelopmentInfoRow('Scripting Languages ', this.props[SCRIPTING_LANGUAGES_USED_NAME], 'info')}
                            {this.getDevelopmentInfoRow('Markup Languages ', this.props[MARKUP_LANGUAGES_USED_NAME], 'dark')}
                            {this.getDevelopmentInfoRow('Stylesheet Languages  ', this.props[STYLESHEET_LANGUAGES_USED_NAME], 'secondary')}
                            {this.getDevelopmentInfoRow('Frameworks Languages ', this.props[FRAMEWORKS_USED_NAME], 'info')}
                            {this.getDevelopmentInfoRow('Development Tools ', this.props[DEVELOPMENT_TOOLS_USED_NAME], 'secondary')}
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="company" title="Company Info" className="card-text">
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
                <Card.Footer className="text-muted">Tenure: { this.getCompanyTenure() }</Card.Footer>
            </Card>
        );
    }
}

export default ExperienceCard;
