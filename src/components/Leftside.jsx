import '../assets/images/ATN logo.png'
import '../assets/images/globe1.png'
import '../assets/leftside.css'
import Mainpage from './Mainpage'
// import {MessageSquareMore} from 'lucide-react'
const Leftside=()=>{
    return (
        <>
        <div className='requestpage'>
        <div className="left">
            <img className='R-logo' width={'120px'} src='src/assets/images/ATN logo.png' alt="pic"></img>
            <div className='l-title'>
                <div className='titles'>
                    <img width={'45px'} style={{marginLeft:'3px',marginTop:'6px'}} src='src/assets/images/pic-1.png' alt='pic'></img>
                    <h4 style={{ marginTop: '15px', marginLeft:'10px' }}>Incoming Request   <code>&gt;</code> </h4>
                </div>

                <div className='titles'>
                    <img width={'46px'} style={{marginLeft:'2px',marginTop:'6px'}} src='src/assets/images/pic-2.png' alt='pic'></img>
                    <h4 style={{ marginTop: '15px', marginLeft:'9px' }}>Completed Request  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'35px'} style={{marginLeft:'7px',marginTop:'6px'}} src='src/assets/images/globe1.png' alt='pic'></img>
                    <h4 style={{ marginTop: '15px', marginLeft:'14px' }}>About Us  <code>&gt;</code></h4>
                </div>

                <div className='titles'>
                    <img width={'40px'} style={{marginLeft:'3px',marginTop:'6px'}} src='src/assets/images/help.jpg' alt='pic'></img>
                    {/* <MessageSquareMore /> */}
                    <h4 style={{ marginTop: '15px', marginLeft:'14px' }}>Help  <code>&gt;</code></h4>
                </div>
            </div>
        </div>

        <Mainpage/>
        </div>

        </>
    )
}
export default Leftside