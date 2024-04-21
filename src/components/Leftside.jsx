import { Outlet } from 'react-router-dom'
import summa from '../assets/images/ATN logo.png'
// import deepa from '../assets/images/globe1.png'
import deepa from "../assets/images/complete1.png"
import deva from "../assets/images/help.jpg"
import dd from "../assets/images/pic-1.png"
import '../assets/leftside.css'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'

// import {MessageSquareMore} from 'lucide-react'
const Leftside=()=>{
    return (
        <>
        <div className='requestpage'>
        <div className="left">
            <img className='R-logo' width={'120px'} src={summa} alt="pic"></img>
            <div className='l-title'>
                <div className='titles'>
                    <img width={'45px'} style={{marginLeft:'3px',marginTop:'6px'}} src={dd} alt='pic'></img>
                    <h4 style={{ marginTop: '10px', marginLeft:'10px',marginBottom:'5px' }}>Incoming Request   <code>&gt;</code> </h4>
                </div>

                <div className='titles'>
                    <img width={'40px'} style={{marginLeft:'3px',marginTop:'6px'}} src={deepa} alt='pic'></img>
                    <h4 style={{ marginTop: '14px', marginLeft:'10px',marginBottom:'5px' }}>Completed Request  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'45px'} style={{marginLeft:'3px',marginTop:'6px'}} src='https://icon-library.com/images/about-us-icon-png/about-us-icon-png-20.jpg' alt='pic'></img>
                    <h4 style={{ marginTop: '12px', marginLeft:'10px',marginBottom:'5px' }}>About Us  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'40px'} style={{marginLeft:'3px',marginTop:'6px'}} src={deva} alt='pic'></img>
                    {/* <MessageSquareMore /> */}
                    <h4 style={{ marginTop: '10px', marginLeft:'14px',marginBottom:'5px' }}>Help  <code>&gt;</code></h4>
                </div>
            </div>
        </div>
        <Outlet/>
        </div>

        </>
    )
}
export default Leftside