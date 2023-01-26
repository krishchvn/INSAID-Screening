/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			'type1': ['Helvetica'],
			'type2': ['Oswald'],
		},
		extend: {
			animation: {
				shine: 'shine 1s',
			},
			keyframes: {
				shine: {
					'100%': { left: '125%' },
				},
			},
		},
	},
	plugins: [],
};
