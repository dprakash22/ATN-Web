import '../assets/dashboard.css'

function Dashboard() {
  return (
        <>
        <div className='right'>
            <div className="head">
                <b>Deepak Prakash</b>
                <img className='profile' width={'55px'} src="src/assets/images/profile.png" alt="pic" />
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
        </div>
        </>
    )
}

export default Dashboard