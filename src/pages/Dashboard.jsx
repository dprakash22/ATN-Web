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

    // const fetch_data = async () => {
    //     try {
    //         const url = "http://localhost:8000/user/allRequests";
    //         console.log(url)
    //         const response = await fetch(url);
    //         const dashContainer = await response.json();
    //         setDashData(dashContainer); 
    //         // console.log(dashData)
    //     } 
    //     catch (error) {
    //         console.error("Error fetching data:");
    //         console.log(error);
    //     }
    // };
    

    // useEffect(()=>{fetch_data()},[]);

    // console.log("this is the dashDara " + dashData+"dnsknsd " + typeof(dashData));
    // // console.log("Summa oru try" + dashData.status)
   
    // useEffect(() => {
    //     console.log("We have entered into DashData of the board")
    //     console.log("this is the dashData1", dashData);
    //     if (dashData.length > 0) {
    //         dashData.forEach(request => {
    //             console.log("Status:", request.status);
    //         });
    //     }
    // }, [dashData]);


    useEffect(() => {
        const fetch_data = async () => {
            try {
                const url = "http://localhost:8000/user/allRequests";
                const response = await fetch(url);
                const dashContainer = await response.json();
                setDashData(dashContainer); 
                console.log(dashData)
            } 
            catch (error) {
                console.error("Error fetching data:");
                console.log(error);
            }
        };

        fetch_data();
    }, []);

    console.log(dashData)

  return (
        <>
        <div className='right'>
            <div className="head">
                <b>Deepa Deva</b>
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

            {/* <table className='t1'>
                <thead>
                    <tr>
                        <th>Person Name</th>
                        <th>No.of items Required</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                

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
            </table> */}

            

            <table className="t1">
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
                    
                         
                    {dashData && Object.entries(dashData).map(([key, val]) => (
                    <tr key={key}>
                        <td>deepak</td>
                        <td>23</td>
                        <td>smaoms</td>
                        <td>{val.createdAt}</td>
                        <td><div className="status">{val.status}</div></td>
                    </tr>
                ))}


                    </tbody>
                </table>
        </div>
        </>
    )
}

export default Dashboard
