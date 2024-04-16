import griffin_image from '../../src/assets/images/griffin_image.png'

function Developers() {
	return (
		<div className="w-full font-public-sans absolute top-[170rem]">
			<div className="w-full pt-48 px-10 text-center">
				<div className="w-fit mx-auto">
					<span className="bg-light-blue-normal text-blue-normal rounded-md font-public-sans text-sm p-1">
						Our Great Team of Developers
					</span>
				</div>
				<div className=" text-[#20208B] w-full  pt-4 font-public-sans">
					<p className="font-normal font-bold  text-[28.6px]">
						Supported by Real People
					</p>
					<p className="text-[23px] font-normal pt-2">
						Who is behind these great-helpful idea?
					</p>
				</div>
			</div>
			<div className="flex items-center w-fit mx-auto gap-10 px-20 py-20 ">
				<div className="h-[276px] rounded-ss-[78px] rounded-t-[10px] w-[221px] bg-[#FFF1E4]">
					<div className="w-full h-[68%] rounded-ss-[78px] rounded-t-[10px] bg-[#FFF1E4]"></div>
					<div className="h-[30%] mt-2 text-center w-full ">
						<p className="text-[18px] text-[#566A7F] font-[700]">Dharun AP</p>
						<p className="text-[15px] text-[#A1ACB8]">
							Project Leader, Mobile Developer
						</p>
					</div>
				</div>

				<div className="h-[276px] rounded-ss-[78px] rounded-t-[10px] w-[221px] bg-[#FFF1E4]">
					<div className="w-full h-[68%] rounded-ss-[78px] rounded-t-[10px] bg-[#D7F5FC]"></div>
					<div className="h-[30%] mt-2 text-center w-full ">
						<p className="text-[18px] text-[#566A7F] font-[700]">Guhan K</p>
						<p className="text-[15px] text-[#A1ACB8]">Mobile Developer</p>
					</div>
				</div>
				<div className="h-[276px] rounded-ss-[78px] rounded-t-[10px] w-[221px] bg-[#FFF1E4]">
					<div className="w-full h-[68%] object-fill object-center rounded-ss-[78px] rounded-t-[10px] bg-[#D7F5FC]">
            <img src={griffin_image} alt="griffin"
            className="w-full bottom-9  relative"
            />
          </div>
					<div className="h-[30%] mt-2 text-center w-full ">
						<p className="text-[18px] text-[#566A7F] font-[700]">
							Griffin Annshual S
						</p>
						<p className="text-[15px] text-[#A1ACB8]">FullStack Develper</p>
					</div>
				</div>
				<div className="h-[276px] rounded-ss-[78px] rounded-t-[10px] w-[221px] bg-[#FFF1E4]">
					<div className="w-full h-[68%] rounded-ss-[78px] rounded-t-[10px] bg-[#FFE0DB]"></div>
					<div className="h-[30%] mt-2 text-center w-full ">
						<p className="text-[18px] text-[#566A7F] font-[700]">
							Deepak Prakash
						</p>
						<p className="text-[15px] text-[#A1ACB8]">Web Developer</p>
					</div>
				</div>
				<div className="h-[276px] rounded-ss-[78px] rounded-t-[10px] w-[221px] bg-[#FFF1E4]">
					<div className="w-full h-[68%] rounded-ss-[78px] rounded-t-[10px] bg-[#E8FADF]"></div>
					<div className="h-[30%] mt-2 text-center w-full ">
						<p className="text-[18px] text-[#566A7F] font-[700]">
							Prasanth K Y
						</p>
						<p className="text-[15px] text-[#A1ACB8]">IOT Developer</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Developers
