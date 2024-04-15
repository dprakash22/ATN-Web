import PropTypes from 'prop-types'


function BlueButton({text, type}) {
  return (
		<div className="px-2 cursor-pointer py-[0.4rem] items-center rounded-md bg-blue-normal hover:bg-violet-500 hover:scale-105 text-white font-public-sans text-[1rem] flex gap-1 w-fit ">
			{type === "login" && <i className="bx bx-user"></i>}
            {text}
		</div>
	)
}

export default BlueButton

BlueButton.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
}