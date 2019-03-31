import React from 'react';
import {Col, Row} from 'react-bootstrap';
import AnchorTagNavigationLink from './anchor_tag_navigation_link';
import {remove_duplicates_es6} from '../../helpers/array_helpers';

class TagRelationships extends React.Component{
    getOrganizations(){
        return remove_duplicates_es6(this.props.organizations);
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
            {this.getOrganizations().map(function(organization, i) {
                    return (
                        <Row xs={12} md={8} key={organization.companyName + i} >
                            <AnchorTagNavigationLink {...organization}/>
                        </Row>
                    );
                },
            )}
        </div>);
    }
}

export default TagRelationships;
