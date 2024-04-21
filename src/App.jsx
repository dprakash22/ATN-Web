import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'		
import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import StartingPage from './components/StartingPage'
import Loginpage from './components/Loginpage.jsx'
import Leftside from './components/Leftside.jsx'
import Signup from './components/Signup.jsx'
import Product from './pages/Product.jsx'

const App=()=>{
	return (
	<>
	{/* <Leftside /> */}
	{/* <Outlet/> */}
	</>
	)
}
export default App

		// <Router>
		// 	<Routes>
		// 		<Route
		// 			path="/"
		// 			element={<StartingPage />}
		// 		/>
		// 		<Route
		// 			path="/login"
		// 			element={<Loginpage />}
		// 		/>
		// 		<Route
		// 			path="/land"
		// 			element={<LandingPage />}
		// 		/>
		// 		<Route
		// 			path="/signup"
		// 			element={<Signup />}
		// 		/>

		// 		<Route
		// 			path="/Leftside"
		// 			element={<Leftside />} 	
		// 		/>
		// 	</Routes>
		// </Router>


