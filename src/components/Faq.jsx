import helping from '../assets/images/helping.jpg'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { faq } from '../utils/dummyData.json'

function Faq() {
  return (
		<div
			id="faq"
			className="w-[100%]  bg-[#FFF1E4] absolute top-[285rem] rounded-[5rem] ">
			<div className="w-[95%] py-20 mx-auto">
				<div className="mx-auto font-public-sans pb-16">
					<div className="bg-light-blue-normal text-blue-normal rounded-md text-sm p-1 w-fit mx-auto">
						FAQ
					</div>
					<p className="text-2xl text-[#20208B]   font-normal w-fit mx-auto mt-2 mb-2">
						Frequently asked questions
					</p>
					<p className="text-[#20208B] text-sm font-normal w-[60%] mx-auto text-center">
						Browse through these FAQs to find answers to commonly asked
						questions.
					</p>
				</div>
				<div className="flex gap- w-full justify-between  ">
					<div>
						<img
							className="w-[150rem] mx-10"
							src={helping}></img>
					</div>
					<div className=" pl-[100px]">
						{faq.map((item, index) => {
							return (
								<div
									key={index}
									className="w-[90%] pl-20  py-[0.3rem] text-gray-normal rounded-xl shadow-2 shadow-gray-normal">
									<Accordion>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel1-content"
											id="panel1-header">
											<div className='text-[#20208B]'>
												{item.title}
											</div>
										</AccordionSummary>
										<AccordionDetails className="text-[#20208B]">
											{item.description}
										</AccordionDetails>
									</Accordion>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq