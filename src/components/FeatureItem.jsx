import PropTypes from "prop-types"


function FeatureItem({image, title , desc}) {
  FeatureItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }
  return (
		<div className="text-gray-normal w-[30%] p-8">
			<span className="w-full">
				<img
					className="w-fit mx-auto"
					src={image}
					alt="item-logo"
				/>
			</span>
			<div className="w-fit mx-auto font-public-sans font-normal text-xl pt-4">
				{title}
			</div>
			<div className="w-fit mx-auto  text-center pt-4">{desc}</div>
		</div>
	)
}

export default FeatureItem