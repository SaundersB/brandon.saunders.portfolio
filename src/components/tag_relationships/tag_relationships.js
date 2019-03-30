import React from 'react';
import projects from '../../content/project_content';
import {Col, Row} from 'react-bootstrap';
import ProjectSelector from '../../pages/projects/projects';

class TagRelationships extends React.Component{
    render()
    {
        return (<div>
            <Row xs={12} md={8}>
                <Col className="text-center">
                    {this.props.tagName}
                </Col>
            </Row>
            <Row xs={12} md={8} >
                <div className="col-5">
                    Organizations Utilized:
                </div>
                <div className="col-7">
                    {this.props.organizations.map(function(organization, i) {
                            return (
                                <Col className="text-center">
                                    { organization.companyName }
                                </Col>
                            );
                        },
                    )}
                </div>
            </Row>
        </div>);
    }
}


export default TagRelationships;
