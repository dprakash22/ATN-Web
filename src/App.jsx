import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StartingPage from './components/StartingPage'
import Loginpage from './components/Loginpage.jsx'
import Home from './pages/Home'
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