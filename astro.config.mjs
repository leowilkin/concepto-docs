import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Concepto AI',
			editLink: {
		        baseUrl: 'https://github.com/leowilkin/concepto-docs/edit/main/',
		      	},
			defaultLocale: 'root',
			locales: {
			  root: {
				label: 'English',
				lang: 'en',
			  },
			  'fr': {
				label: 'Français',
				lang: 'fr-FR',
			  },
			},
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
				github: 'https://github.com/leowilkin/concepto',
				twitter: 'https://twitter.com/concepto_ai',
			},
			sidebar: [ 
				{
					label: 'About',
					autogenerate: { directory: 'about' },
					collapsed: true,
					translations: {
						'fr-FR': 'À propos de'
					},
				},
				{
					label: 'Self Hosted',
					autogenerate: { directory: 'self-hosted' },
					collapsed: true,
					translations: {
						'fr-FR': 'Auto-hébergé'
					},
				},
				{
					label: 'Cloud Hosted',
					autogenerate: { directory: 'cloud-hosted' },
					badge: 'BETA',
					collapsed: true,
					translations: {
						'fr-FR': 'Hébergement Cloud'
					},
				},
			],
		}),
	],
});
