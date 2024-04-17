import PricingCard from "./PricingCard"
import {pricing_plan} from '../utils/dummyData.json'
import basic from "../assets/images/basic.png"
import intermediate from "../assets/images/intermediate.png"
import advanced from "../assets/images/advanced.png"


function PricingPlans() {
  return (
		<div
			id="pricing"
			className="w-[100%]  bg-[#FFF1E4] absolute top-[220rem] rounded-[5rem] ">
			<div className="w-[95%]  pt-20 mx-auto">
				<div className="w-fit mx-auto font-public-sans pb-16">
					<div className="bg-light-blue-normal text-blue-normal rounded-md text-sm p-1 w-fit mx-auto">
						PRICING PLANS
					</div>
					<p className="text-2xl text-gray-normal   font-normal w-fit mx-auto mt-2 mb-2">
						Tailored pricing plans designed for you
					</p>
					<p className="text-gray-normal font-normal  text-sm w-[60%] mx-auto text-center">
						All plans include 40+ advanced tools and features to boost your
						product. Choose the best plan to fit your needs.
					</p>
				</div>
				<div className="flex justify-center gap-[5%]">
					<PricingCard
						image={basic}
						title={pricing_plan[0].plan}
						price={pricing_plan[0]["price/m"]}
						points={pricing_plan[0].points}
					/>
					<PricingCard
						image={intermediate}
						title={pricing_plan[1].plan}
						price={pricing_plan[1]["price/m"]}
						points={pricing_plan[1].points}
					/>
					<PricingCard
						image={advanced}
						title={pricing_plan[2].plan}
						price={pricing_plan[2]["price/m"]}
						points={pricing_plan[2].points}
					/>
				</div>
			</div>
		</div>
	)
}

export default PricingPlans