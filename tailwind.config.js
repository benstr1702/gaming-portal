/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				customPurple: "rgb(149, 142, 247)",
			},
		},
	},
	plugins: [],
};
