module.exports = {
	mode: 'jit',
	darkMode: 'media',
	purge: ['./src/**/*.svelte'],
	content: [],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
