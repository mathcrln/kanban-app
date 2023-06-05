/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-gray': '#F4F7FD',
				'main-purple': '#635FC7',
				'medium-gray': '#828FA3',
				'dark-gray': '#2B2C37',
				'very-dark-gray': '#20212C',
				'base-red': '#EA5555',
				'red-hover': '#FF9898',
				'lines-light': '#E4EBFA',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
