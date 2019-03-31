import React from 'react';
import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import AnchorTagNavigationLink from './anchor_tag_navigation_link';
import {remove_duplicates_es6} from '../../helpers/array_helpers';

class TagRelationships extends React.Component{
    getOrganizations(){
        return remove_duplicates_es6(this.props.organizations);
    }
    getProjects(){
        return this.props.projects;
    }
    render()
    {
        if(typeof this.props.tagName === 'undefined' || this.props.tagName === '') {
            return (<div/>);
        }
        let entities;
        switch (this.props.relationshipType) {
            case 'Organizations': {
                entities = this.getOrganizations();
                break;
            }
            case 'Projects': {
                entities = this.getProjects();
                break;
            }
            default: {
                return;
            }
        }

        entities.forEach((entity) => {
            entity.entityType = this.props.relationshipType;
        });

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
                                {entities.map(function(entity, i) {
                                        return (
                                            <div className="col text-center" key={entity + i}>
                                                <AnchorTagNavigationLink {...entity}/>
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
