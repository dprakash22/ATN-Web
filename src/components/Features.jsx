import FeatureItem from "./FeatureItem"
import network from "../assets/images/network.png"
import cloud from "../assets/images/cloud.png"
import person from '../assets/images/person.png';
import real from '../assets/images/real.png';
import shield from '../assets/images/shield.png';
import phone from '../assets/images/phone.png';
import{ features } from '../utils/dummyData.json'



function Features() {
	return (
		<div
			id="features"
			className="flex justify-center absolute  top-[170%] w-full">
			<div className="bg-[#FFF1E4] py-20 rounded-[100px]">
				<div className="w-fit mx-auto">
					<span className="bg-light-blue-normal text-blue-normal rounded-md font-public-sans text-sm p-1">
						USEFUL FEATURES
					</span>
				</div>
				<div className=" text-[#20208B] w-full text-center pt-4 font-public-sans">
					<p className="font-normal  text-2xl">
						Everything you need to start your next project
					</p>
					<p className="text-sm font-normal pt-2">
						Not just a set of tools, the package includes ready-to-deploy
						conceptual application.
					</p>
				</div>
				<div className="flex  text-[#20208B] flex-wrap w-[100vw] justify-center">
					<FeatureItem
						title={features[0].title}
						desc={features[0].description}
						image={network}
					/>
					<FeatureItem
						title={features[1].title}
						desc={features[1].description}
						image={real}
					/>
					<FeatureItem
						title={features[2].title}
						desc={features[2].description}
						image={phone}
					/>
					<FeatureItem
						title={features[3].title}
						desc={features[3].description}
						image={cloud}
					/>
					<FeatureItem
						title={features[4].title}
						desc={features[4].description}
						image={person}
					/>
					<FeatureItem
						title={features[5].title}
						desc={features[5].description}
						image={shield}
					/>
				</div>
			</div>
		</div>
	)
}

export default Features
