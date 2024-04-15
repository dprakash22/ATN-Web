/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js,tsx}"],
	theme: {
		extend: {
			colors: {
				"gray-normal": "#566a7f",
				"blue-normal": "#696cff",
				"light-blue-normal": "#e7e7ff",
				"card-blue-normal": "#f5f5f9",
				"dark-blue-normal": "#38344c",
				"primary-violet": "#7E57D8FF",
				"level-heading": "#171A1FFF",
				"level-sub-heading": "#565D6DFF",
				"accordion-heading": "#BDC1CAFF",
			},
			fontFamily: {
				lexend: ["Lexend", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				"public-sans": ["Public Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
}

