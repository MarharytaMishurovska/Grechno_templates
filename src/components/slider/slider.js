
import './slider.scss';


import { Component, Fragment } from 'react';
import { Carousel } from 'antd';

import slideOne from '../slider/slider-img/slide1.png';
import slideTwo from '../slider/slider-img/slide2.png';
import slideThree from '../slider/slider-img/slide3.png';
// import slideFour from '../slider/slider-img/slide4.jpeg';

class HeaderSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // const contentStyle = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  
  render () {
    return (
      <Fragment className='offer'>
        <Carousel autoplay>
          <div>
            <img src={slideOne} alt=' '/>
          </div>
          <div>
            <img src={slideTwo} alt=' '/>
          </div>
          <div>
            <img src={slideThree} alt=' '/>
          </div>
          {/* <div>
            <img src={slideFour} alt=' '/>
          </div> */}
        </Carousel>
      </Fragment>
    )
  }
}

export default HeaderSlider;