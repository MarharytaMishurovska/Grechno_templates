import { Component } from 'react';

import './header-info.scss';

import HeaderSlider from '../slider/slider';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../header-info/header-info-img/logo.png';
import basket from '../header-info/header-info-img/basket.svg'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  openModal = (e) => {
    e.target = alert('Empty')
  }

  render () {
    return (
      <header>
        <div className='app-header'>
          <Container className='header-main'>
            <Row>
              <Col>
                <div className='header-info'>
                  <div className='header-logo'><img src={logo} alt='logo'/></div> 
                  <div className='header-basket'>
                    <img src={basket} alt='basket' onClick={this.openModal}/>
                  </div>
                </div>
                <div className='header-text'>
                  <h1>Grechno</h1>
                  <h3>Сумки, створені бути поруч 
                      у всіх випадках життя
                  </h3>
                </div>
                <button className='button-info-main' name=''>ДИВИТИСЯ КАТАЛОГ</button>
              </Col>
              <Col>
                <HeaderSlider/>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    )
  }
}



export default Header;