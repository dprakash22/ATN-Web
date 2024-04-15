import Faq from "./../components/Faq"
import Features from "./../components/Features"
import Footer from "./../components/Footer"
import Home from "./../components/Home"
import PrcingPlans from "./../components/PricingPlans"



function LandingPage() {
	import("../tailwind.css")
	return (
		<div className="flex">
			<Home />
			<Features />
			<PrcingPlans />
			<Faq />
			<div className="w-[100%] absolute top-[560%] flex-col  bg-dark-blue-normal  rounded-t-[5rem] py-10 ">
				<Footer />
			</div>
		</div>
	)
}

export default LandingPage
