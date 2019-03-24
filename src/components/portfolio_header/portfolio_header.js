import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

class PortfolioHeader extends React.Component
{
    render()
    {
        return (
            <Container>
                <Row className='header-spacing' xs={12}>
                    <Col>
                        <h1>Brandon Saunders</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PortfolioHeader;
