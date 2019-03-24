import React from "react";
import Figure from 'react-bootstrap/es/Figure';
import personal_profile_pic from '../../assets/images/profile_picture.png';
import {Card, Col, Container, Row} from 'react-bootstrap';

class ProfessionalDetails extends React.Component {
    render()
    {
        return(
            <Container className="center-alignment">
                <Row >
                    <Col>
                        <Figure >
                            <Figure.Image
                                roundedCircle={true}
                                width={171}
                                height={180}
                                alt="171x180"
                                src={personal_profile_pic}
                            />
                            <Card>
                                <Card.Body>
                                    <Card.Title>Introduction</Card.Title>
                                    <Card.Text className="left-align-text">
                                        Brandon Saunders is a software engineer with four years of consecutive software engineering experience in web development, application development, and DevOps.
                                        <br/><br/>
                                        Currently working at <Card.Link href="#/experience">JNR Incorporated</Card.Link> in Irvine, CA as a software engineer in the prepaid incentive market.
                                        Open to new opportunities for both full time and freelance work.
                                        <br/><br/>
                                    </Card.Text>
                                    <Card.Link className="center-alignment" href="mailto:BrandonNSaunders@gmail.com">Contact me</Card.Link>
                                </Card.Body>
                            </Card>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        );
    }
}




export default ProfessionalDetails
