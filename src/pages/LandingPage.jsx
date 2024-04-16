import Faq from "./../components/Faq"
import Features from "./../components/Features"
import Footer from "./../components/Footer"
import Home from "./../components/Home"
import PrcingPlans from "./../components/PricingPlans"
import Testimonials from "../components/Testimonials"
import Developers from "../components/Developers"


function LandingPage() {
	import("../tailwind.css")
	return (
		<div className="flex">
			<Home />
			<Features />
			<Testimonials />
			<Developers />
			<PrcingPlans />
			<Faq />
			<div className="w-[100%] absolute top-[340rem] flex-col  bg-[#FFF1E4]  rounded-t-[5rem] py-10 ">
				<Footer />
			</div>
		</div>
	)
}

export default LandingPage
