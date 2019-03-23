import React from "react";
import Figure from 'react-bootstrap/es/Figure';
import personal_profile_pic from '../../assets/images/profile_picture.png';
import {Card} from 'react-bootstrap';

class ProfessionalDetails extends React.Component {
    render()
    {
        return(
            <div className="text-center maximize-window-minus-sidebar" >
                <Figure>
                    <Figure.Image
                        roundedCircle={true}
                        width={171}
                        height={180}
                        alt="171x180"
                        src={personal_profile_pic}
                    />
                    <Figure.Caption>

                    </Figure.Caption>
                    <Card style={{ width: '35rem' }}>
                        <Card.Body>
                            <Card.Title>Introduction</Card.Title>
                            <Card.Text className="left-align-text">
                                Brandon Saunders is a software engineer with four years of consecutive software engineering experience in web development, application development, and DevOps.
                                <br/><br/>
                                Currently working at <Card.Link href="#/experience">JNR Incorporated</Card.Link> in Irvine, CA as a software engineer in the prepaid incentive market.
                                Open to new opportunities for both full time and freelance work.
                                <br/><br/>
                                <div className="col text-center">
                                    <Card.Link className="center-alignment" href="mailto:BrandonNSaunders@gmail.com">Contact me</Card.Link>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Figure>
            </div>
        );
    }
}




export default ProfessionalDetails
