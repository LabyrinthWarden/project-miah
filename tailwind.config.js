import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: ['light', 'dark', 'emerald', 'synthwave', 'nightdrive']
	}
};
