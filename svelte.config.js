import adapter from "@sveltejs/adapter-static";
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
				pages: "docs",
				assets: "docs",
				fallback: "index.html"
		}),
		prerender: {
			entries: ['*']
		},
		paths: {
				// change below to your repo name
				base: dev ? "" : "/svelte-sheets",
		},
}
};

export default config;
