import React from 'react';
import projects from '../../content/project_content';
import ProjectSelector from '../../components/project_selector/project_selector';
import {Container, Row} from 'react-bootstrap';
import {PROJECT_KEY} from '../../helpers/constants';
import history from '../../router/history';
import scrollToElement from 'scroll-to-element';

class Projects extends React.Component
{
    componentDidMount() {
        this.jumpToHash();
    }
    componentDidUpdate() {
        this.jumpToHash();
    }
    jumpToHash = () => {
        const hash = history.location.hash;
        if (hash) {
            scrollToElement(hash, { offset: -120 });
        }
    };
    render()
    {
        return (
            <Container className="center-alignment">
                    <h3 className="secondary-portfolio-header border-line">Projects</h3>
                    {projects.map(function(object, i) {
                            return (
                                <Row xs={12} md={8} key={object + "-" + i + "-row"} >
                                    <ProjectSelector id={object[PROJECT_KEY]}
                                                     key={object[PROJECT_KEY]}
                                                     {...object} />
                                </Row>
                            );
                        },
                    )}
            </Container>
        );
    }
}

export default Projects;
