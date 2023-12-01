import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Concepto AI',
			social: {
				github: 'https://github.com/leowilkin/concepto',
			},
			sidebar: [
				{
					label: 'Concepto AI',
					autogenerate: { directory: 'concepto' },
				},
				{
					label: 'Beta Access',
					autogenerate: { directory: 'beta-access '},
				},
			],
		}),
	],
});
