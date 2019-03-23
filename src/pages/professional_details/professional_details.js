import React from "react";
import Figure from 'react-bootstrap/es/Figure';
import personal_profile_pic from '../../assets/images/profile_picture.png';

class ProfessionalDetails extends React.Component {
    render()
    {
        return(
            <div className="text-center maximize-window-minus-sidebar" >
                <h2>About</h2>
                <Figure>
                    <Figure.Image
                        roundedCircle={true}
                        width={171}
                        height={180}
                        alt="171x180"
                        src={personal_profile_pic}
                    />
                    <Figure.Caption>
                        Currently working at JNR as a software engineer in the prepaid incentive market.
                    </Figure.Caption>
                </Figure>
            </div>
        );
    }
}




export default ProfessionalDetails
