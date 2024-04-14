import './App.css'
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
}
export default App