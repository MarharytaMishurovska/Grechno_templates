

import handmadeImg from './info-panel-img/handmade.png';
import priceImg from './info-panel-img/price.png';
import qalityImg from './info-panel-img/qality.png';
import speedImg from './info-panel-img/speed.png';

const InfoPanel = () => {
  return (
      <div className='offset'>
        <div className='offset-item'>
          <div className='offset-item-img'>
            <img src={handmadeImg} alt={'handmade'}/>
          </div>
          <div className='offset-item-info'>
            <h3>HANDMADE</h3>
            <p>Індивідуальність, ручна робота</p>
          </div>
        </div>
        <div className='offset-item'>
          <div className='offset-item-img'>
            <img src={qalityImg} alt={'qality'} />
          </div>
          <div className='offset-item-info'>
            <h3>ЯКІСТЬ</h3>
            <p>Власне виробництво</p>
          </div>
        </div>
        <div className='offset-item'>
          <div className='offset-item-img'>
            <img src={priceImg} alt={'price'} />
          </div>
          <div className='offset-item-info'>
            <h3>ЦІНА</h3>
            <p>Конкурентна вартість</p>
          </div>
        </div>
        <div className='offset-item'>
          <div className='offset-item-img'>
            <img src={speedImg} alt={'speed'} />
          </div>
          <div className='offset-item-info'>
            <h3>ШВИДКІСТЬ</h3>
            <p>Оперативність виготовлення та відправка</p>
          </div>
        </div>
      </div>
  )
}

export default InfoPanel;