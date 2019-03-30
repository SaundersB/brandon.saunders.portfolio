import React from 'react';
import projects from '../../content/project_content';
import ProjectSelector from '../../components/project_selector/project_selector';
import {Container, Row} from 'react-bootstrap';
import {PROJECT_KEY} from '../../helpers/constants';

class Projects extends React.Component
{
    render()
    {
        return (
            <Container className="center-alignment">
                    <h3 className="secondary-portfolio-header border-line">Projects</h3>
                    {projects.map(function(object, i) {
                            return (
                                <Row xs={12} md={8} key={object + "-" + i + "-row"} >
                                    <ProjectSelector id={object[PROJECT_KEY]} key={object[PROJECT_KEY]} {...object} />
                                </Row>
                            );
                        },
                    )}
            </Container>
        );
    }
}

export default Projects;
