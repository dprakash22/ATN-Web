import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard'
import Home from './pages/Home'

const App=()=>{
  return (
		<Router>
			<Routes>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
			</Routes>
		</Router>
	)
=======
import First from './components/First.jsx'
import Leftside from './components/Leftside.jsx'

const App=()=>{
  return (
    <First/>
    // <Leftside/>
  )
>>>>>>> 9f3a72f2c2a975c067aaf3bc73820bb992944590
}
export default App