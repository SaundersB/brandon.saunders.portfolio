import React from "react";
import experience from '../../content/professional_experience_content';
import ExperienceCard from '../../components/experience_card/experience_card';

class ProfessionalExperience extends React.Component {
    render()
    {
        return(
            <div className="center-alignment">
                <h3>Experience</h3>
                <div className="col">
                    {experience.map(function(object, i) {
                            return (
                                <div className="row generic-menu" key={i}>
                                    <ExperienceCard key={i} {...object} />
                                </div>
                            );
                        },
                    )}
                </div>
            </div>
        );
    }
}

export default ProfessionalExperience;
