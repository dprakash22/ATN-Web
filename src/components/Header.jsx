
import icon from '../assets/images/ATN logo.png';
import BlueButton from './BlueButton';
import {useRef} from 'react'
import Cookies from "universal-cookie"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
// import axios from 'axios'
// import {userDataRoute} from "../utils/APIRoutes"
import Proptypes from 'prop-types'

function Header({ setUpperUser }) {
	const [user, setUser] = useState(null)
	const cookies = new Cookies()
	const navigate = useNavigate()
	const headerRef = useRef(null)
	window.addEventListener("scroll", function () {
		var header = headerRef.current
		var scrollPosition = window.scrollY

		if (scrollPosition > 100) {
			header.classList.add("bg-opacity-100")
			header.classList.remove("bg-opacity-60")
		} else {
			header.classList.remove("bg-opacity-100")
			header.classList.add("bg-opacity-60")
		}
	})
	const token = cookies.get("harshan_ai_access_token")
	// useEffect(() => {
	// 	const token = cookies.get("harshan_ai_access_token")

	// 	async function fetchUserData() {
	// 		const response = await axios.get(userDataRoute, {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		})
	// 		console.log(response.data.user_details)
	// 		setUser(response.data.user_details)
	// 		setUpperUser(response.data.user_details)
	// 	}
	// 	fetchUserData()
	// }, [])
	const handleLogin = () => {
		navigate("/login")
	}
	const handleLogout = () => {
		cookies.remove("harshan_ai_access_token")
		cookies.remove("harshan_ai_access_token_expiration")
		window.location.reload()
	}
	return (
		<div className="w-[100vw] z-10 fixed">
			<div
				ref={headerRef}
				className="transition-opacity duration-500 justify-between pr-4  w-[93%] flex items-center mx-auto mt-4 border-2 border-white  bg-white bg-opacity-60 rounded-md h-[5rem] bg-gray">
				<a href="/">
					<div className="flex gap-2 items-centerp-2 pl-2">
						<img
							className="w-[8rem] h-[5rem] "
							src={icon}
							alt="icon image"
						/>
					</div>
				</a>
				<div className="w-[65%] justify-center text-gray-normal font-public-sans font-semibold flex gap-[1rem] text-lg">
					<a href="/">
						<span className="hover:text-blue-normal cursor-pointer ">Home</span>
					</a>

					<a href="#features">
						<span className="hover:text-blue-normal cursor-pointer ">
							Features
						</span>
					</a>

					{/* <span className="hover:text-blue-normal cursor-pointer ">Team</span> */}
					<a href="#faq">
						<span className="hover:text-blue-normal cursor-pointer ">FAQ</span>
					</a>
					{/* <span className="hover:text-blue-normal cursor-pointer ">Team</span> */}
					<a href="/contacts">
						<span className="hover:text-blue-normal cursor-pointer ">Contact us</span>
					</a>
					{/* <span className="hover:text-blue-normal cursor-pointer ">
						Contact Us
					</span> */}
					<a href="#pricing">
						<span className="hover:text-blue-normal cursor-pointer ">
							Pricing
						</span>
					</a>

					<span className="hover:text-blue-normal cursor-pointer ">Admin</span>
				</div>
					<div
						onClick={handleLogin}
						className="flex gap-4 items-center">
						<i className="bx bx-sun text-gray-normal bx-sm hover:text-blue-normal cursor-pointer "></i>
						<BlueButton
							text={"Login/Register"}
							type={"login"}
						/>
					</div>
			</div>
		</div>
	)
}

export default Header

Header.propTypes = {
	setUpperUser: Proptypes.func.isRequired
}