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
				{
				tag: 'script',
				attrs: 	{
					type: 'text',
					content: 'window.$crisp=[];window.CRISP_WEBSITE_ID="1009217c-3ca9-4875-8078-cabc010d0f3a";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
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
				{
					label: 'Policies',
					autogenerate: { directory: 'policies' },
					collapsed: true,
				},
			],
		}),
	],
});
