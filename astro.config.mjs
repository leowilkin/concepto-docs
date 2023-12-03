import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Concepto AI',
			lastUpdated: true,
			favicon: '/favicon.svg',
			customCss: [
				'./src/styles/custom.css',
			  ],
			logo: {
				dark: './src/assets/logo-light.svg',
				light: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/leowilkin/concepto-docs',
			},
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
					collapsed: true,
				},
				{
					label: 'Self Hosted',
					autogenerate: { directory: 'self-hosted' },
					collapsed: true,
				},
				{
					label: 'Cloud Hosted',
					autogenerate: { directory: 'cloud-hosted' },
					badge: 'BETA',
					collapsed: true,
				},
			],
		}),
	],
});
