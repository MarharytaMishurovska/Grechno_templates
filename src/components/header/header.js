import './header.scss'

import { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';


import bascket from './header-img/bascket.svg';
import logo from './header-img/logo.png';




class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
        <Fragment >
          <Container className='header'>
            <Row className='header-buttons' >
              <Col className='logo'>
                <img src={logo} alt='' md={1}/>
              </Col>
              <Col className='button-group' md={6}>
                <button className='group-item'>Шопери</button>
                <button className='group-item'>Авоськи</button>
                <button className='group-item'>Набори</button>
                <button className='group-item'>Оновлення</button>
                <button className='group-item'>Розпродаж</button>
              </Col>
              <Col className='info-group'  md={3}>
                <button className='info-item'>зв’язатися</button>
                <button className='info-bascket'>
                  <img src={bascket} alt=''/>
                </button>
              </Col>
            </Row>
          </Container>
        </Fragment>
    )
  }

}

export default Header;