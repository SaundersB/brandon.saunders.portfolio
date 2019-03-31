import React from "react";
import experience from '../../content/professional_experience_content';
import ExperienceCard from '../../components/experience_card/experience_card';
import {Container, Row} from 'react-bootstrap';
import {COMPANY_NAME} from '../../helpers/constants';
import {getOrganizationKey} from '../../helpers/string_helpers';
import scrollToElement from 'scroll-to-element';
import history from '../../router/history';

class ProfessionalExperience extends React.Component {
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
        return(
            <Container>
                <h3 className="center-alignment secondary-portfolio-header border-line">Experience</h3>
                    {experience.map(function(object, i) {
                            return (
                                <Row xs={12} md={8} key={i + "-row"}>
                                    <ExperienceCard className="center-alignment card "
                                                    id={getOrganizationKey(object[COMPANY_NAME])}
                                                    key={getOrganizationKey(object[COMPANY_NAME])}
                                                    {...object} />
                                </Row>
                            );
                        },
                    )}
            </Container>
        );
    }
}

export default ProfessionalExperience;
