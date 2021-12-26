

import './catalog-previev.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import shopper_one from '../catalog-previev/catalog-previev-img/shopper-1.png';
import shopper_two from '../catalog-previev/catalog-previev-img/shopper-2.png';
import shopper_three from '../catalog-previev/catalog-previev-img/shopper-3.png';
import shopper_four from '../catalog-previev/catalog-previev-img/shopper-4.png';
import shopper_five from '../catalog-previev/catalog-previev-img/shopper-5.png';
import shopper_six from '../catalog-previev/catalog-previev-img/shopper-6.png';
import arrow from '../catalog-previev/catalog-previev-img/catalog-arrow.png';

// class Catalog extends Component {


//   render () {
//       
//   }
// }

const CatalogPreviev = () => {
  return (
    <div className='catalog'>
      <div className='catalog-info'>
        <Container>
          <Row>
            <Col className='catalog-item'>
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_one} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' xs={12} md={10}><Card.Title>Шопер з розписом</Card.Title></Col>
                      <Col className='card-arrow' xs={4} md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row >
                      <Col md={8}>
                        <div className='card-descr-item'></div>
                        <div className='card-descr-item'></div>
                        </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col className='catalog-item'>
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_two} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' md={10}><Card.Title>Набір “ВЕСНА”</Card.Title></Col>
                      <Col className='card-arrow' md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <div className='card-descr-item'>Авоська</div>
                        <div className='card-descr-item'>Еко чашка</div>
                      </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col className='catalog-item'>
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_three} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' md={10}><Card.Title>Набір “ОСНОВА”</Card.Title></Col>
                      <Col className='card-arrow' md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <div className='card-descr-item'>Авоська</div>
                        <div className='card-descr-item'>Шопер</div>
                      </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className='catalog-item'>
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_four} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' md={10}><Card.Title>Набір “ОСНОВА”</Card.Title></Col>
                      <Col className='card-arrow' md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <div className='card-descr-item'>Шопер</div>
                        <div className='card-descr-item'></div>
                      </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col className='catalog-item'> 
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_five} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' md={10}><Card.Title>Набір “ОСНОВА”</Card.Title></Col>
                      <Col className='card-arrow' md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <div className='card-descr-item'>Шопер</div>
                        <div className='card-descr-item'></div>
                      </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col className='catalog-item'>
              <Card style={{ width: '20rem' }} className='card-item'>
                <Card.Img variant="top" src={shopper_six} className='card-item-img' />
                <Card.Body>
                  <Container className='card-describe'>
                    <Row>
                      <Col className='card-title' md={10}><Card.Title>Набір “ОСНОВА”</Card.Title></Col>
                      <Col className='card-arrow' md={2}><img src={arrow} alt=' '/></Col>
                    </Row>
                    <Row>
                      <Col md={8}>
                        <div className='card-descr-item'>Шопер</div>
                        <div className='card-descr-item'></div>
                      </Col>
                      <Col md={4}>
                        <div className='card-price'>350 грн</div>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default CatalogPreviev;