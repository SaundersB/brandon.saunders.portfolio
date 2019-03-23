import React from "react";
import projects from '../../content/project_content';
import ProjectSelector from '../../components/project_selector/project_selector';

class ProfessionalDetails extends React.Component {
    render()
    {
        return(
            <div className="center-text" >
                <h1>Brandon Saunders</h1>
                <p>Software Engineer who enjoys learning new things...</p>
                <h3>Projects</h3>
                <div className="col">
                    {projects.map(function(object, i) {
                            return (
                                <div className="row project-menu">
                                    <ProjectSelector key={i} {...object} />
                                </div>);
                        }
                    )}
                </div>
            </div>
        );
    }
}




export default ProfessionalDetails
