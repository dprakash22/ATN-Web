import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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