// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://learningdart.github.io',
	integrations: [
		starlight({
			title: '{Name}',
			plugins: [starlightAutoSidebar()],
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
