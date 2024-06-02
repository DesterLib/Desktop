/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				gradient: 'gradient 8s linear infinite'
			},
			keyframes: {
				gradient: {
					to: { 'background-position': '200% center' }
				}
			}
		}
	},
	plugins: []
};
