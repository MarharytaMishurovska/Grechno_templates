import './side-panel.css';

import facebook from '../side-panel/side-panel-img/facebook.svg';
import instagram from '../side-panel/side-panel-img/instagram.svg'


const SidePanel = () => {

  return (
    <div className='sidepanel'>
      <div className='sidepanel__icon'>
        <a href='https://www.facebook.com/grechno'
        target="_blank" rel="noreferrer noopener">
          <img src={facebook} alt=' '/>
        </a>
      </div>
      <div className='sidepanel__icon'>
        <a href='https://www.instagram.com/grechno/'
        target="_blank" rel="noreferrer noopener">
          <img src={instagram} alt=' '/>
        </a>  
      </div>
    </div>
  )
}

export default SidePanel;
