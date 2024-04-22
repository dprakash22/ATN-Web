import '../assets/dashboard.css'
import profile from "../assets/images/profile.png"
import { useState , useEffect } from 'react'

function Dashboard() {

    const [dashData , setDashData] = useState([]);
    const [personal, setPersonal] = useState();
    const [numItems , setNumItems] = useState();
    const [phone , setPhone ] = useState();
    const [date , ssetDate] = useState();
    const [ status , setStatus] = useState();

    const fetch_data = async () => {
        try {
            const url = "http://localhost:8000/user/allRequests";
            console.log(url)
            const response = await fetch(url);
            const dashContainer = await response.json();
            setDashData(dashContainer); 
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    useEffect(()=>{fetch_data()},[]);

    console.log("this is the dashDara " + dashData + typeof(dashData));
    // console.log("Summa oru try" + dashData.status)
   
    useEffect(() => {
        console.log("this is the dashData", dashData);
        if (dashData.length > 0) {
            dashData.forEach(request => {
                console.log("Status:", request.status);
            });
        }
    }, [dashData]);

  return (
        <>
        <div className='right'>
            <div className="head">
                <b>Deepa Prakashi</b>
                <img className='profile' width={'55px'} src={profile} alt="pic" />
            </div>

            <div className='donate'>
                <div>
                <h1><b>All Donation Requests</b></h1>
                <h4 style={{color:'green'}}>Active Members</h4>
                </div>

                <div>
                    <input type="text" id="inputField" placeholder='Search' style={{padding:'3px', paddingLeft:'5px',marginLeft:'500px',width:'250px'}}/>
                </div>

                <div>
                    <select id="dropdown" style={{padding:'3px', marginLeft: '30px', border: '1px solid silver',width:'150px'}}>
                        <option value="" disabled selected hidden>Filter</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Madurai">Madurai</option>
                    </select>
                </div>
            </div>

            <table className='t1'>
                <tr>
                    <th>Person Name</th>
                    <th>No.of items Required</th>
                    <th>Phone Number</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>

                <tr>
                    <td>Dharun</td>
                    <td>10</td>
                    <td>9328741897</td>
                    <td>14-04-2024</td>
                    <td><div className='status'>Completed</div></td>
                </tr>

                <tr>
                    <td>Deepak</td>
                    <td>20</td>
                    <td>9328741897</td>
                    <td>14-04-2024</td>
                    <td><div className='status'>Incompleted</div></td>
                </tr>

                <tr>
                    <td>Prakash</td>
                    <td>18</td>
                    <td>9328741897</td>
                    <td>14-04-2024</td>
                    <td><div className='status'>Completed</div></td>
                </tr>


                <tr>
                    <td>Guhan</td>
                    <td>9</td>
                    <td>9328741897</td>
                    <td>14-04-2024</td>
                    <td><div className='status'>Completed</div></td>
                </tr>
            </table>

            

            {/* <table className="t1">
                     <thead>
                         <tr>
                             <th>Person Name</th>
                             <th>No.of items Required</th>
                             <th>Phone Number</th>
                             <th>Date</th>
                             <th>Status</th>
                         </tr>
                     </thead>
                    <tbody>
                         
                        {dashData.map((request, index) => (
                            <tr key={index}>
                                <td>{request.personName}</td>
                                <td>{request.numItemsRequired}</td>
                                <td>{request.phoneNumber}</td>
                                <td>{request.date}</td>
                                <td><div className="status">{request.status}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
        </div>
        </>
    )
}

export default Dashboard



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/dashboard.css';
// import profile from '../assets/images/profile.png';

// function Dashboard() {
//     const [donationRequests, setDonationRequests] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('/allRequests'); 
//                 setDonationRequests(response.data); 
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData(); 
//     }, []);

//     return (
//         <>
//             <div className="right">
//                 <div className="head">
//                     <b>Deepak Prakash</b>
//                     <img className="profile" width={'55px'} src={profile} alt="pic" />
//                 </div>

//                 <div className="donate">
//                     <div>
//                         <h1><b>All Donation Requests</b></h1>
//                         <h4 style={{ color: 'green' }}>Active Members</h4>
//                     </div>

//                     {/* Search and filter elements */}
//                     {/* Add your search and filter elements here */}
//                 </div>

//                 <table className="t1">
//                     <thead>
//                         <tr>
//                             <th>Person Name</th>
//                             <th>No.of items Required</th>
//                             <th>Phone Number</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* Render donation requests data */}
//                         {donationRequests.map((request, index) => (
//                             <tr key={index}>
//                                 <td>{request.personName}</td>
//                                 <td>{request.numItemsRequired}</td>
//                                 <td>{request.phoneNumber}</td>
//                                 <td>{request.date}</td>
//                                 <td><div className="status">{request.status}</div></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }

// export default Dashboard;
