import React from 'react'
import person1 from '../../src/assets/images/person1.png'
import comp1 from '../../src/assets/images/hubspot.png'

function Testimonials() {
  return (
		<div className="bg-[#FFF1E4] h-[531.68px] rounded-[100px] w-full absolute top-[140rem]">
			<div className="w-full flex gap-20 items-center">
				<div className="w-[25%] pt-48 px-10 text-center">
					<div className="w-fit mx-auto">
						<span className="bg-light-blue-normal text-blue-normal rounded-md font-public-sans text-sm p-1">
							Real Customers Reviews
						</span>
					</div>
					<div className=" text-[#20208B] w-full  pt-4 font-public-sans">
						<p className="font-normal font-bold  text-[28.6px]">What people say</p>
						<p className="text-[23px] font-normal pt-2">
							See what our customers have to say about their experience.
						</p>
					</div>
				</div>
				<div className="flex gap-[30px] w-[60%] pt-32">
					<div className="text-public-sans text-[15px] text-[#697A8D] bg-white py-4 px-4 rounded-xl w-[35%]">
						<img
							src={comp1}
							alt=""
							className="w-[73px]"
						/>
						<p className="pt-[16px]">
							“I've never used a theme as versatile and flexible as Vuexy. It's
							my go to for building dashboard sites on almost any project.”
						</p>
						<div className="flex items-center gap-4 pt-[58px]">
							<img
								src={person1}
								alt=""
								className="w-[32px]"
							/>
							<div className="flex-col">
								<span className="text-[#566A7F] font-bold">Eugenia Moore</span>
								<br />
								<span>Founder of Hubspot</span>
							</div>
						</div>
					</div>
					<div className="text-public-sans text-[15px] text-[#697A8D] bg-white py-4 px-4 rounded-xl w-[35%]">
						<img
							src={comp1}
							alt=""
							className="w-[73px]"
						/>
						<p className="pt-[16px]">
							“I've never used a theme as versatile and flexible as Vuexy. It's
							my go to for building dashboard sites on almost any project.”
						</p>
						<div className="flex items-center gap-4 pt-[58px]">
							<img
								src={person1}
								alt=""
								className="w-[32px]"
							/>
							<div className="flex-col">
								<span className="text-[#566A7F] font-bold">Eugenia Moore</span>
								<br />
								<span>Founder of Hubspot</span>
							</div>
						</div>
					</div>
					<div className="text-public-sans text-[15px] text-[#697A8D] bg-white py-4 px-4 rounded-xl w-[35%]">
						<img
							src={comp1}
							alt=""
							className="w-[73px]"
						/>
						<p className="pt-[16px]">
							“I've never used a theme as versatile and flexible as Vuexy. It's
							my go to for building dashboard sites on almost any project.”
						</p>
						<div className="flex items-center gap-4 pt-[58px]">
							<img
								src={person1}
								alt=""
								className="w-[32px]"
							/>
							<div className="flex-col">
								<span className="text-[#566A7F] font-bold">Eugenia Moore</span>
								<br />
								<span>Founder of Hubspot</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials