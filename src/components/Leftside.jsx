import { Outlet } from 'react-router-dom'
import logo from '../assets/images/ATN logo.png'
import complete from "../assets/images/complete1.png"
import help from "../assets/images/help.jpg"
import pic from "../assets/images/pic-1.png"
import '../assets/leftside.css'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'

// import {MessageSquareMore} from 'lucide-react'
const Leftside=()=>{
    return (
        <>
        <div className='requestpage'>
        <div className="left">
            <img className='R-logo' width={'120px'} src={logo} alt="pic"></img>
            <div className='l-title'>
                <div className='titles'>
                    <img width={'45px'} style={{marginLeft:'3px',marginTop:'6px'}} src={pic} alt='pic'></img>
                    <h4 style={{ marginTop: '10px', marginLeft:'10px',marginBottom:'5px' }}>Incoming Request   <code>&gt;</code> </h4>
                </div>

                <div className='titles'>
                    <img width={'35px'} style={{marginLeft:'3px',marginTop:'6px'}} src={complete} alt='pic'></img>
                    <h4 style={{ marginTop: '14px', marginLeft:'10px',marginBottom:'5px' }}>Completed Request  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'45px'} style={{marginLeft:'3px',marginTop:'6px'}} src='https://icon-library.com/images/about-us-icon-png/about-us-icon-png-20.jpg' alt='pic'></img>
                    <h4 style={{ marginTop: '12px', marginLeft:'10px',marginBottom:'5px' }}>About Us  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'40px'} style={{marginLeft:'3px',marginTop:'6px'}} src={help} alt='pic'></img>
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