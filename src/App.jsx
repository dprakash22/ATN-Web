import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard'
import LandingPage from './pages/LandingPage'

const App=()=>{
  return (
		<Router>
			<Routes>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/"
					element={<LandingPage />}
				/>
			</Routes>
		</Router>
	)
}
export default App