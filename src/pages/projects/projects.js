import React from 'react';
import projects from '../../content/project_content';
import ProjectSelector from '../../components/project_selector/project_selector';
import {Container} from 'react-bootstrap';
import Col from 'react-bootstrap/es/Col';
import Row from 'react-bootstrap/Row';

class Projects extends React.Component
{
    render()
    {
        return (
            <Container className="center-alignment">
            {/*<div className="center-alignment">*/}
                        <h3>Projects</h3>
                        {projects.map(function(object, i) {
                                return (
                                    <Row xs={12} md={8}>
                                        <ProjectSelector key={i} {...object} />
                                    </Row>
                                );
                            },
                        )}
            {/*</div>*/}
            </Container>
        );
    }
}

export default Projects;
