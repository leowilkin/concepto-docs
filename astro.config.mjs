import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://concepto-docs.vercel.app',
	integrations: [
		starlight({
			title: 'Concepto AI',
			head: [
				{
      				tag: 'script',
      				attrs: {
	        			src: 'https://scripts.withcabin.com/hello.js',
					async: true,
					defer: true,
			      		},
			    	},
				{
				tag: 'meta',
				attrs: {
					name: 'google-site-verification',
					content: '8tx08dWFjBU-bY-VH7xm2Ug4ah3oL75_vuU5ORW-gjU',
					},
				},
			],
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
			  'it': {
				label: 'Italiano'
				lang: 'it-IT'
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
						'fr-FR': 'À propos de',
						'it-IT': 'Translation in Progress'
					},
				},
				{
					label: 'Self Hosted',
					autogenerate: { directory: 'self-hosted' },
					collapsed: true,
					translations: {
						'fr-FR': 'Auto-hébergé',
						'it-IT': 'Translation in Progress'

					},
				},
				{
					label: 'Cloud Hosted',
					autogenerate: { directory: 'cloud-hosted' },
					badge: 'BETA',
					collapsed: true,
					translations: {
						'fr-FR': 'Hébergement Cloud',
						'it-IT': 'Translation in Progress'

					},
				},
			],
		}),
	],
});
