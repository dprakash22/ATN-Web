import '../assets/images/first.jpg'
import '../assets/images/ATN logo.png'
import '../assets/firstcss.css';
import React, { useEffect } from 'react';

const StartingPage=()=>{

    useEffect(() => {
        const timer = setTimeout(() => {
          window.location.href = "/land";
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className='container'>
        <img className='water'  width={'1535px'} height={'700px'} src="src/assets/images/first.jpg" alt="pic"></img>
        <img className='logo' src='src/assets/images/ATN logo.png' alt='pic'></img>
        <div className='circle'></div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        </div>
        </>
    )
}
export default StartingPage