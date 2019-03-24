import React from "react";
import experience from '../../content/professional_experience_content';
import ExperienceCard from '../../components/experience_card/experience_card';
import {Container, Row} from 'react-bootstrap';

class ProfessionalExperience extends React.Component {
    render()
    {
        return(
            <Container>
                <h3 className="center-alignment">Experience</h3>
                    {experience.map(function(object, i) {
                            return (
                                <Row xs={12} md={8} key={i + "-row"}>
                                    <ExperienceCard className="center-alignment card " key={i} {...object} />
                                </Row>
                            );
                        },
                    )}
            </Container>
        );
    }
}

export default ProfessionalExperience;
