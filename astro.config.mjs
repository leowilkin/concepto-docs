import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import overrideIntegration from "./src/overrideIntegration.mjs";

export default defineConfig({
	site: 'https://conceptoai.app',
	integrations: [
		overrideIntegration(),
		starlight({
			title: 'Concepto AI',
			head: [
				{
      				tag: 'script',
      				attrs: {
	        			src: 'https://analytics.conceptoai.app/hello.js',
						async: true,
						defer: true,
			      		},
			    },
				{
					tag: 'script',
					attrs: {
						src: 'https://eu.umami.is/script.js',
						async: true,
						content: 'c311aadc-0654-4f4a-91ef-52b258ce909f',
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
				github: 'https://github.com/concepto-ai',
				twitter: 'https://twitter.com/concepto_ai',
			},
			sidebar: [
				{ label: 'Status', link: 'https://status.conceptoai.app' },
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
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
					collapsed: true,
				},
			],
		}),
	],
});
