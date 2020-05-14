import React from "react";
import experience from '../../content/professional_experience_content';
import ExperienceCard from '../professional_experience/professional_experience';

class ProfessionalSkills extends React.Component {
    render()
    {
        return(
            <div className="center-alignment">
                <h3 className="secondary-portfolio-header border-line">Skills</h3>
                <div className="col">
                    {experience.map(function(object, i) {
                            return (
                                <div className="row generic-menu" key={i}>
                                    {/*<ExperienceCard key={i} {...object} />*/}
                                </div>
                            );
                        },
                    )}
                </div>
            </div>
        );
    }
}

export default ProfessionalSkills;
