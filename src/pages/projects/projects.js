import React from 'react';
import projects from '../../content/project_content';
import ProjectSelector from '../../components/project_selector/project_selector';

class Projects extends React.Component
{
    render()
    {
        return (
            <div className="center-text">
                <h3>Projects</h3>
                <div className="col">
                    {projects.map(function(object, i) {
                            return (
                                <div className="row project-menu" key={i}>
                                    <ProjectSelector key={i} {...object} />
                                </div>
                            );
                        },
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;
