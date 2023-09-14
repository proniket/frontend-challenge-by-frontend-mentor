/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Open Sans', 'sans-serif'],
				body: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'bg-desktop': "url('/images/bg-desktop.svg')",
				'bg-mobile': "url('/images/bg-mobile.svg')",
			},
			colors: {
				vilot: 'hsl(257, 40%, 49%)',
				'soft-magentagrayish-blue': 'hsl(300, 69%, 71%)',
			},
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
	},
	plugins: [],
};
