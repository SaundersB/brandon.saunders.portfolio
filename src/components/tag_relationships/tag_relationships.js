import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {getOrganizationKey} from '../../helpers/string_helpers';

class TagRelationships extends React.Component{
    static getOrgLink(organization){
        let orgURL = getOrganizationKey(organization.companyName);
        return <a href={"/#experience#" + orgURL}>{organization.companyName}</a>
    }

    render()
    {
        if(typeof this.props.tagName === 'undefined' || this.props.tagName === '') {
            return (<div/>);
        }

        return (<div>
            <Row xs={12} md={8}>
                <Col className="text-center">
                    Organizations {this.props.tagName} Utilized:
                </Col>
            </Row>
            <Row xs={12} md={8}>
                <Col>
                    {this.props.organizations.map(function(organization, i) {
                            return (
                                    <Row xs={12} md={8} key={organization.companyName + i} className="text-center">
                                        {TagRelationships.getOrgLink(organization)}
                                    </Row>
                            );
                        },
                    )}
                </Col>
            </Row>
        </div>);
    }
}


export default TagRelationships;
