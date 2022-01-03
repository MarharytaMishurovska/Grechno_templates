import './sales.scss';

import {Component, Fragment} from 'react';
import { Container,Col, Row } from 'react-bootstrap';

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import leftPanel from './sales-img/left-panel.png';
import rightPanel from './sales-img/right-panel.png';
// import leftArrow from './sales-img/left-arrow.svg';
// import rightArrow from './sales-img/right-arrow.svg';

class Sales extends Component {
  constructor(props) {
    super(props) 
      this.state = {

      }
  }

  render() {
    return (
      <Fragment>
        <Container className='panels'>
          <Row >
            <Col className='text-item'>
              <h4 className='left-text'>ОНОВЛЕННЯ</h4>
              <HiArrowNarrowRight className='arrow right-arrow' />
            </Col>
            <Col className='panel-img'>
              <img src={leftPanel} alt='left'/>
            </Col>
            <Col className='panel-img'>
              <img src={rightPanel} alt='right'/>
            </Col>
            <Col className='text-item'>
              <h4 className='right-text'>РОЗПРОДАЖ</h4> 
              <HiArrowNarrowLeft className='arrow left-arrow'/>
            </Col>
          </Row>
        </Container>
          
      </Fragment>        
    )
  }
}

export default Sales;