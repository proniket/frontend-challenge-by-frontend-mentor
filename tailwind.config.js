/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			white: 'hsl(0, 0%, 100%)',
			'grayish-blue': 'hsl(220, 15%, 55%)',
			'dark-blue': 'hsl(218, 44%, 22%)',
			'light-gray': 'hsl(212, 45%, 89%)',
		},
	},
	plugins: [],
};

