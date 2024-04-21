import './App.css'
import { BrowserRouter as Router, Routes, Route , createBrowserRouter} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import StartingPage from './components/StartingPage'
import Loginpage from './components/Loginpage.jsx'
import Leftside from './components/Leftside.jsx'
import Signup from './components/Signup.jsx'

const App=()=>{
  return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<StartingPage />}
				/>
				<Route
					path="/login"
					element={<Loginpage />}
				/>
				<Route
					path="/land"
					element={<LandingPage />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>

				<Route
					path="/Leftside"
					element={<Leftside />} 	
				/>
			</Routes>
		</Router>
	)
}
export default App


/*

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/dharun.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Login from './components/Login.jsx'
import NewUser from './components/NewUser.jsx'
import { TaskList } from './components/TaskList.jsx'
import Taskspage from './components/Taskspage.jsx'
import { TaskCompo } from './components/TaskCompo.jsx'
import { CreateForm } from './components/CreateForm.jsx'
import Addclass from './components/AddClass.jsx'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<NewUser/>
    },
    {
        path:'/home/:uid',
        element:<App/>,
        children:[
            {
                path:'/home/:uid/',
                element:<Body/>
            },
            {
                path:'/home/:uid/create-cls',
                element:<Addclass/>
            },
            {
                path:'/home/:uid/task/:id',
                element:<Taskspage/>,
                children:[
                    {
                        path:'/home/:uid/task/:id/',
                        element:<TaskList/>
                    },
                    {
                        path:'/home/:uid/task/:id/form',
                        element:<CreateForm/>
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={Router}/>
)

 

*/
