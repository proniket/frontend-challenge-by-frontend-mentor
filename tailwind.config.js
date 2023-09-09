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
			Red: 'hsl(0, 78%, 62%)',
      Cyan: 'hsl(180, 62%, 55%)',
      Orange: 'hsl(34, 97%, 64%)',
      Blue: 'hsl(212, 86%, 64%)',
      'Very-Dark-Blue': 'hsl(234, 12%, 34%)',
      'Grayish-Blue': 'hsl(229, 6%, 66%)',
      'Very-Light-Gray': 'hsl(0, 0%, 98%)',
		},
	},
	plugins: [],
};
