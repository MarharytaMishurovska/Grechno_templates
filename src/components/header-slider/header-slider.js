


import slideOne from '../header-slider/header-slider-img/slide1.png';
// import slideTwo from '../app-header-slider/app-header-slider-img/slide2.png';
// import slideThree from '../app-header-slider/app-header-slider-img/slide3.png';

const HeaderSlider = () => {
  return (
    <div className='offer__slider'>
      <div className='offer__slider-wrapper'>
        <div className='offer__slider-inner'>
          <div className='offer__slide'>
            <img src={slideOne} alt=''/>
          </div>
          {/* <div className='offer__slide'>
            <img src={slideTwo} alt=''/>
          </div>
          <div className='offer__slide'>
            <img src={slideThree} alt=''/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider;