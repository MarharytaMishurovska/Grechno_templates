import './header.scss'

import { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';





class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
        <Fragment className='header'>
          <Container>
            <Row>
              <Col md='3'>
                <img alt=' '></img>
              </Col>
              <Col className='button-group' md='9'>
                <button className='group-item'>1</button>
                <button className='group-item'>2</button>
                <button className='group-item'>3</button>
              </Col>
            </Row>
          </Container>
        </Fragment>
    )
  }

}

export default Header;