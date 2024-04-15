import Header from "./Header"
import hero_bg from '../assets/images/font-page/home/hero-bg.png'
import arrow from "../assets/images/font-page/home/Join-community-arrow.png"
import BlueButton from "./BlueButton"
import hero_dashboard from '../assets/images/font-page/home/hero-card.png'
function Home() {
  return (
		<div className="">
			<img
				src={hero_bg}
				alt="background image"
				className="w-full h-screen rounded-b-[5rem] absolute top-0 left-1/2 -translate-x-1/2 object-cover "
				data-speed="1"></img>
			<Header />
			<div className="w-[100%] flex-col absolute">
				<div className="leading-[1.2] bg-gradient-to-r from-green-500 via-indigo-500 to-red-500 text-transparent bg-clip-text text-[2.5rem] font-bold text-center mx-auto mt-[15%] text-blue-normal w-[55%] relative overflow-hidden">
					One dashboard to manage all your businesses
					<div className=" text-gray-normal text-[1.2rem] font-normal pt-10">
						Production-ready & easy to use Admin Template
					</div>
					<div className=" text-gray-normal text-[1.2rem] font-normal">
						for Readability and Customisability
					</div>
					<div className="text-lg items-center text-gray-normal font-normal w-[100%] mx-auto  flex justify-center">
						<div className="text-lg pt-10 pb-10 text-gray-normal font-normal flex">
							Join Community
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
							className="w-[200%] mx-auto relative bottom-[10rem] "
							alt="dashboard-image"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
