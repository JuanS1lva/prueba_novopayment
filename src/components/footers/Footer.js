import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
} from 'reactstrap';
import isotipo from '../../assets/img/Isotipo.svg'

function Footer(args) {

  return (
    <>
        <Card color='primary'>

        
        <Container>
            <Row className='p-4'>
                <Col md='1' xs='12' className='p-4'>
                    <img
                        alt="isotipo"
                        src={isotipo}
                    />
                </Col>
                <Col md='10' xs='12' className='p-4'>
                    <p className="text-white" style={{fontSize:"1.3rem"}}>© 2022 Novopayment Inc. All rights reserved.</p>
                </Col>
                <Col md='1' xs='12' className='p-4'>
                    <img
                        alt="isotipo"
                        src={isotipo}
                    />
                </Col>
            </Row>
        </Container>
        </Card>
    </>
  );
}

export default Footer;

