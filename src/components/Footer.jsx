import icon from "../assets/images/font-page/home/icon.png"
import google from '../assets/images/font-page/home/google-play-icon.png'
import apple from '../assets/images/font-page/home/apple-icon.png'
import x from '../assets/images/font-page/home/twitter-light.png'
import fb from '../assets/images/font-page/home/facebook-light.png'
import insta from '../assets/images/font-page/home/instagram-light.png'
import git from '../assets/images/font-page/home/github-light.png'
function Footer() {
	return (
		<>
			<div className="w-[90%] mx-auto flex gap-[5%] items-center mb-8">
				<div className="flex-col">
						<div className="flex gap-1 pt-4 w-fit">
							<img
								className="w-[2rem] h-[2rem] "
								src={icon}
								alt="icon image"
							/>
							<p className=" font-extrabold text-gray-normal text-3xl">sneat</p>
						</div>
						<div className="text-light-blue-normal text-sm w-[50%] pt-4">
							Most developer friendly & highly customisable Admin Dashboard
							Template.
						</div>
					</div>
					<div className="text-sm text-light-blue-normal flex-col text-left leading-6">
						<p className="font-bold ">Demos</p>
						<p>Vertical Layout</p>
						<p>Horizontal Layout</p>
						<p>Bordered Layout</p>
						<p>Semi Dark Layout</p>
						<p>Dark Layout</p>
					</div>
					<div className="text-sm text-light-blue-normal flex-col text-left leading-6">
						<p className="font-bold ">Demos</p>
						<p>Vertical Layout</p>
						<p>Horizontal Layout</p>
						<p>Bordered Layout</p>
						<p>Semi Dark Layout</p>
						<p>Dark Layout</p>
					</div>
					<div className="text-sm text-light-blue-normal flex-col text-left">
						<b>Download our app</b>
						<img
							className="pt-4"
							src={google}></img>
						<img
							className="pt-4 mb-10"
							src={apple}></img>
					</div>
				</div>
				<div className="w-full bg-[#282c3e] p-4 flex justify-between absolute    items-center">
					<div className="font-normal text-sm text-light-blue-normal">
						© 2024 HarshanAI
					</div>
					<div className="flex gap-8 px-4">
						<a href="">
							<img src={git} />
						</a>
						<a href="">
							<img src={fb} />
						</a>
						<a href="">
							<img src={insta} />
						</a>
						<a href="">
							<img src={x} />
						</a>
					</div>
				</div>
		</>
	)
}

export default Footer
