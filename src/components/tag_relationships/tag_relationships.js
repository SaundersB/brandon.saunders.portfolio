import React from 'react';
import {Col, Row} from 'react-bootstrap';
import AnchorTagNavigationLink from './anchor_tag_navigation_link';

class TagRelationships extends React.Component{
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
                                    <AnchorTagNavigationLink {...organization}/>
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
