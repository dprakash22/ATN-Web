import FeatureItem from "./FeatureItem"
import check from '../assets/images/font-page/features/check.png';
import keyboard from '../assets/images/font-page/features/keyboard.png';
import laptop from '../assets/images/font-page/features/laptop.png';
import paper from '../assets/images/font-page/features/paper.png';
import rocket from '../assets/images/font-page/features/rocket.png';
import user from '../assets/images/font-page/features/user.png';
import{ features } from '../utils/dummyData.json'



function Features() {
	return (
		<div id="features"  className="flex justify-center absolute  top-[170%] w-full">
			<div className="">
				<div className="w-fit mx-auto">
					<span className="bg-light-blue-normal text-blue-normal rounded-md font-public-sans text-sm p-1">
						USEFUL FEATURES
					</span>
				</div>
				<div className="text-gray-normal w-full text-center pt-4 font-public-sans">
					<p className="font-normal  text-2xl">
						Everything you need to start your next project
					</p>
					<p className="text-sm font-normal pt-2">
						Not just a set of tools, the package includes ready-to-deploy
						conceptual application.
					</p>
				</div>
				<div className="flex flex-wrap w-[100vw] justify-center">
					<FeatureItem
						title={features[0].title}
						desc={features[0].description}
						image={laptop}
					/>
					<FeatureItem
						title={features[1].title}
						desc={features[1].description}
						image={rocket}
					/>
					<FeatureItem
						title={features[2].title}
						desc={features[2].description}
						image={paper}
					/>
					<FeatureItem
						title={features[3].title}
						desc={features[3].description}
						image={check}
					/>
					<FeatureItem
						title={features[4].title}
						desc={features[4].description}
						image={user}
					/>
					<FeatureItem
						title={features[5].title}
						desc={features[5].description}
						image={keyboard}
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
