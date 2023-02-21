// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
	typescript: {
		strict: true,
		typeCheck: true,
	},
	modules: [
		[
			'@pinia/nuxt',
		],
	],
	components: [
		{
			path: '~/components',
			extensions: ['.tsx'],
			pathPrefix: false,
		}
	],
	ssr: false,
})
