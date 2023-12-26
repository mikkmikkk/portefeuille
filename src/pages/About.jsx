import React from 'react';
import './About.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import about from './img/about.jpg';
import mic from './img/mic.png';
import potion from './img/potion.png';
import red from './img/red.png';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';



import 'primeicons/primeicons.css';
        

function About() {

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
    <div>
      <div className='backgroundabt'>
        <img src={about} alt="" />
      </div>

      <img className='pic' src={mic} alt="" />

      <img className='red' src={red} alt="" />

      <img className='potion' src={potion} alt="" />


      <div className='Hme'>
        <Button label="Home" className="p-button" onClick={handleHomeClick} />
      </div>

      <div className='Abt'>
        <Button label="About" className="p-button" onClick={handleAboutClick} />
      </div>

      <div className='Web'>
        <Button label="Web dev" className="p-button" onClick={handleWebDevClick} />
      </div>
      
      
      <div className='content'>
        <h1>Hello!</h1>
        <h4>I'm Micah Espinosa, a second-year student at the University of </h4>
        <h4>Immaculate Conception majoring in Computer Science. I graduated from</h4>
        <h4>Senior High School at Holy Child College of Davao, (STEM) Strand </h4>
        <h4>Science, Technology, Engineering, and Mathematics. Currently acquiring </h4>
        <h4>and improving abilities to be helpful in the future. I worked on web </h4>
        <h4>development projects as a UI designer and front-end developer.</h4>
        {/* Add more content here */}
      </div>
      
      <div>
          <span className="pi pi-facebook facebook-icon" onClick={() => window.location.href = 'https://www.facebook.com/micah.espinosa.18?mibextid=9R9pXO'}></span>
     </div>

     <div>
     <span className="pi pi-github github-icon" onClick={() => window.location.href = 'https://github.com/mikkmikkk'}></span>
     </div>
     
     <div className='port'>
      <h4>JavaScript, HTML, CSS</h4>
     </div>

     <div className='sword'>
      <h4>Java</h4>
     </div>
     

    </div>
  );
}

export default About;