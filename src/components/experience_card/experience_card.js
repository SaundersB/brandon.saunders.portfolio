import React from 'react';
import Card from 'react-bootstrap/Card';
import {Tab, Tabs} from 'react-bootstrap';
import moment from 'moment';

class ExperienceCard extends React.Component
{
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
                    <Tab eventKey="description" title="Description">
                        {this.props.experience}
                    </Tab>
                    <Tab eventKey="development" title="Development Info">
                        {this.props.developmentToolsUsed}
                        {this.props.programmingLanguagesUsed}
                    </Tab>
                    <Tab eventKey="company" title="Company Info">
                        <Card.Link href={this.props.companyURL}>Company Site</Card.Link>
                    </Tab>
                </Tabs>
                <Card.Footer className="text-muted">Tenure: { this.getCompanyTenure() }</Card.Footer>
            </Card>
        );
    }
}

export default ExperienceCard;
