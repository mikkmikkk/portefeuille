import React from 'react';
import './home.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import He from './img/He.png';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


function home(){
  
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

  return(
<>
  <img className='background' src={He} alt="" />

  


<div className='Hme'>
  <Button label="Home" className="p-button" onClick={handleHomeClick} />
</div>

<div className='Abt'>
  <Button label="About" className="p-button" onClick={handleAboutClick} />
</div>

<div className='Web'>
  <Button label="Web dev" className="p-button" onClick={handleWebDevClick} />
</div>
      </>  
    )
}
export default home