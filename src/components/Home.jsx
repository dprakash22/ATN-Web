import Header from "./Header"
import arrow from "../assets/images/font-page/home/Join-community-arrow.png"
import BlueButton from "./BlueButton"
import hero_dashboard from '../assets/images/dashboard.png'
function Home() {
  return (
		<div className="">
			<div
				className="w-full bg-[#FFF1E4] h-screen rounded-b-[5rem] absolute top-0 left-1/2 -translate-x-1/2 object-cover "
				data-speed="1"></div>
			<Header />
			<div className="w-[100%] flex-col absolute">
				<div className="leading-[1.2] bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 text-transparent bg-clip-text text-[3rem] font-bold text-center mx-auto mt-[15%] text-blue-normal w-[55%] relative overflow-hidden">
					{`Disaster Relief Made Easy \n All Needs, All People, One Dashboard`}
					<div className=" text-gray-normal text-[1.2rem] font-normal pt-10">
						Easy to Read and Note Relief Requests
					</div>
					<div className=" text-gray-normal text-[1.2rem] font-normal">
						for Fast and Speedy Recovery
					</div>
					<div className="text-lg items-center text-gray-normal font-normal w-[100%] mx-auto  flex justify-center">
						<div className="text-lg pt-10 pb-10 text-gray-normal font-normal flex">
							Get Started
							<img
								src={arrow}
								alt="arrow"
							/>
						</div>
						<div className="h-fit">
							<BlueButton
								className=""
								text={"Get early access"}
								type={"getAccess"}
							/>
						</div>
					</div>
					<div className="pt-[1rem] flex-col">
						<img
							src={hero_dashboard}
							className="w-[200%] mx-auto relative top-[2px] bottom-[10rem] "
							alt="dashboard-image"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
