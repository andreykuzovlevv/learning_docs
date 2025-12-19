// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '{Name}',
			social: [
				{ icon: 'seti:dart', label: 'Dart', href: 'https://dart.dev/' },
			],
			sidebar: [
				{
					label: 'Уроки по Dart',
					autogenerate: { directory: 'dart/lessons/' },
				},
			],

		}),
	],
});
