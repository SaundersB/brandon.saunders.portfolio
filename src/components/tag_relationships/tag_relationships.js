import React from 'react';
import {Card, Col, ListGroup, Row} from 'react-bootstrap';
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
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {this.props.relationshipType} {this.props.tagName} Utilized
                        </Card.Title>
                    </Card.Body>
                    <ListGroup>
                        <ListGroup.Item>
                                {this.getOrganizations().map(function(organization, i) {
                                        return (
                                            <div className="col text-center" key={organization + i}>
                                                <AnchorTagNavigationLink {...organization}/>
                                            </div>
                                        );
                                    },
                                )}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>

        </div>);
    }
}

export default TagRelationships;
