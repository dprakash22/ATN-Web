import PropTypes from 'prop-types'

function PricingPoints({li}){

    return (
			<div className="flex gap-2 items-center w-fit pl-10 pb-2  ">
				<span>
					<i className="bx bx-check bx-xs bg-blue-normal text-card-blue-normal p-1 rounded-full"></i>
				</span>
				<p className="text-gray-normal font-medium py-2 text-[17px]">{li}</p>
			</div>
		)
}

function PricingCard({image, title, price, points}) {
  return (
		<div className="rounded-xl w-[28%] bg-white flex-col mb-10 pb-10">
			<div className="flex-col py-6 w-[50%] mx-auto ">
				<img
					className=" w-[35%] mx-auto"
					src={image}
					alt="pricing-icons"></img>
				<p className="text-xl font-normal text-gray-normal w-fit mx-auto pt-4">
					{title}
				</p>
				<div className="flex items-baseline gap-1 text-gray-normal  w-fit mx-auto pt-4">
					<h3 className="text-blue-normal font-semibold text-4xl">₹{price}</h3>
					<span className="text-sm">/mo</span>
				</div>
				<p className="text-sm text-gray-normal  w-fit mx-auto pt-1">
					₹{price * 12} /year
				</p>
			</div>
			<div className="pb-4">
				{points.map((point, index) => {
					return (
						<PricingPoints
							key={index}
							li={point}
						/>
					)
				})}
			</div>
			<div className="text-center text-lg transition-all duration-200 ease-in-out whitespace-nowrap bg-blue-normal mx-auto text-white font-bold hover:transform hover:scale-105 hover:transition-all hover:duration-200 rounded-xl w-[80%] py-2 ">
				Buy
			</div>
		</div>
	)
}

export default PricingCard

PricingPoints.propTypes = {
        li: PropTypes.string.isRequired,
    }
PricingCard.propTypes = {
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    points: PropTypes.arrayOf(String).isRequired
}