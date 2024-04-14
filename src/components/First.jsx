import '../assets/images/first.jpg'
import '../assets/images/ATN logo.png'
import '../assets/firstcss.css';

const First=()=>{
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
export default First