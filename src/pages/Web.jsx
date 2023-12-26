import React from 'react';
import './Web.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import webdev from './img/webdev.jpg';
import STEVE from './img/STEVE.jpg';
import STRANGERGIRL from './img/STRANGERGIRL.jpg';
import CREEPER from './img/CREEPER.jpg'
import NONI from './img/NONI.jpg'
import ZOMBYLAT from './img/ZOMBYLAT.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

function Web() {

    const navigate = useNavigate(); 

  const handleHomeClick = () => {
    console.log('Home button clicked');
    // Navigate to the Home page
    navigate('/');
  };

  const handleAboutClick = () => {
    console.log('About button clicked');
    // Navigate to the About page
    navigate('/about');
  };

  const handleWebDevClick = () => {
    console.log('Web Dev button clicked');
    // Navigate to the Web Dev page
    navigate('/Web');
  };



  return (
    <>
    <img className='backweb' src={webdev} alt="" />
    
    <div className='Hme'>
        <Button label="Home" className="p-button" onClick={handleHomeClick} />
      </div>

      <div className='Abt'>
        <Button label="About" className="p-button" onClick={handleAboutClick} />
      </div>

      <div className='Web'>
        <Button label="Web dev" className="p-button" onClick={handleWebDevClick} />
      </div>
    
    <div className='box1'>
    <img className='tci' src={STEVE} alt="" />  
    <div>
    <span className="pi pi-external-link heart-icon" onClick={() => window.location.href = 'https://tci.uic.edu.ph/categories/feature'}></span>
    </div> 

    </div>

    <div className='box2'>
    <img className='davis' src={CREEPER} alt="" />  
    <div>
    <span className="pi pi-external-link hear-icon" onClick={() => window.location.href = 'https://mikkmikkk.github.io/Web%20Dev/davies%20burger/davies.html'}></span>
    </div>
    </div>

    <div className='box3'>
    <img className='figma' src={STRANGERGIRL} alt="" />
    <div>
    <span className="pi pi-external-link he-icon" onClick={() => window.location.href = 'https://mikkmikkk.github.io/Web%20Dev/examm/index.html'}></span>
    </div>
    </div>

    <div className='box4'>
    <img className='time' src={NONI} alt="" />
    <div>
    <span className="pi pi-external-link hea-icon" onClick={() => window.location.href = 'https://mikkmikkk.github.io/Web%20Dev/wine%20festival/wine.html'}></span>
    </div>
    </div>

    <div className='box5'>
    <img className='fashion' src={ZOMBYLAT} alt="" />
    <div>
    <span className="pi pi-external-link heat-icon" onClick={() => window.location.href = 'https://mikkmikkk.github.io/Web%20Dev/fashion%20blog/fashion.html'}></span>
    </div>
    </div>
    
    </>
  );
}

export default Web;