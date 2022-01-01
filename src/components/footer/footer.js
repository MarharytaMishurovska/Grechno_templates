import './footer.scss';

import { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './footer-img/logo.png';

class Footer extends Component {
   constructor(props) {
    super(props);
    this.state = {

    }
   } 


   render () {
     return (
      <>
        <Container className='footer'>
          <Container>
            <Row>
              <Col>
                <img src={logo} alt='Logo'/>
              </Col>
              <Col>
                <h5>Оплата та доставка</h5>
              </Col>
              <Col>
                <button>замовити</button>
              </Col>
            </Row>
            <Row>
              <p>Сумки, створені бути поруч<br/> 
                  у всіх випадках життя
              </p>
            </Row>
          </Container>
        </Container>
      </>
     )
   }

}

export default Footer;